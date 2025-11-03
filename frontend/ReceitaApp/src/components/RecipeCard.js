import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"

const RecipeCard = ({ recipe, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={recipe.image?.uri ? { uri: recipe.image.uri } : recipe.image} style={styles.image} />
        {recipe.category ? (
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{recipe.category}</Text>
          </View>
        ) : null}
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{recipe.title}</Text>
        <Text style={styles.description}>{recipe.description}</Text>

        <View style={styles.footer}>
          <View style={styles.authorContainer}>
            {recipe.authorImage && (
              <Image source={recipe.authorImage} style={styles.avatar} />
            )}
            {!recipe.authorImage && <View style={styles.avatarPlaceholder} />}
            <Text style={styles.authorName}>{recipe.author}</Text>
          </View>
          <View style={styles.metaContainer}>
            <Text style={styles.time}>{recipe.time}</Text>
            <Text style={styles.date}>{recipe.date}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 16,
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    resizeMode: "cover",
  },
  categoryBadge: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "#FF9500",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 16,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  authorContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  avatarPlaceholder: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#E0E0E0",
    marginRight: 8,
  },
  authorName: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  metaContainer: {
    alignItems: "flex-end",
  },
  time: {
    fontSize: 12,
    color: "#666",
  },
  date: {
    fontSize: 12,
    color: "#999",
  },
})

export default RecipeCard

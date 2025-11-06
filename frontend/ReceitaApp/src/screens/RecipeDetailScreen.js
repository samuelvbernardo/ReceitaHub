import { useState } from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, SafeAreaView, StatusBar } from "react-native"
import BottomTabBar from "../components/BottomTabBar"

const RecipeDetailScreen = ({ navigation, route }) => {
  const { recipe } = route.params
  const [rating, setRating] = useState(0)

  const ingredients = recipe.ingredients?.length ? recipe.ingredients : []
  const instructions = recipe.instructions?.length ? recipe.instructions : []
  const tips = recipe.tips || []

  const handleBack = () => {
    navigation.goBack()
  }

  const renderStars = (currentRating = recipe.rating) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => setRating(i)}>
          <Text style={[styles.star, i <= currentRating && styles.starFilled]}>★</Text>
        </TouchableOpacity>,
      )
    }
    return stars
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        
        <View style={styles.imageContainer}>
          <Image source={recipe.image?.uri ? { uri: recipe.image.uri } : recipe.image} style={styles.headerImage} />
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Text style={styles.backButtonText}>← Voltar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View style={styles.recipeHeader}>
            <Text style={styles.title}>{recipe.title}</Text>
            <Text style={styles.description}>{recipe.description}</Text>

            <View style={styles.authorSection}>
              <View style={styles.authorInfo}>
                {recipe.authorImage ? (
                  <Image source={recipe.authorImage} style={styles.authorAvatar} />
                ) : (
                  <View style={styles.authorAvatarPlaceholder} />
                )}
                <View>
                  <Text style={styles.authorName}>Por {recipe.author?.username || recipe.author}</Text>
                  <Text style={styles.authorDate}>{recipe.date || recipe.published_date || ''}</Text>
                </View>
              </View>
              <Text style={styles.reviewCount}>
                {recipe.rating} ({recipe.reviews} avaliações)
              </Text>
            </View>
          </View>

          
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <View style={styles.statIcon}>
                <Text style={styles.statIconText}>⏱</Text>
              </View>
              <Text style={styles.statValue}>{recipe.time}</Text>
              <Text style={styles.statLabel}>Preparo</Text>
            </View>
            <View style={styles.statItem}>
              <View style={styles.statIcon}>
                <Text style={styles.statIconText}>👥</Text>
              </View>
              <Text style={styles.statValue}>{recipe.servings}</Text>
              <Text style={styles.statLabel}>Porções</Text>
            </View>
            <View style={styles.statItem}>
              <View style={styles.statIcon}>
                <Text style={styles.statIconText}>📊</Text>
              </View>
              <Text style={styles.statValue}>{recipe.difficulty}</Text>
              <Text style={styles.statLabel}>Dificuldade</Text>
            </View>
          </View>

          
          <View style={styles.recipeImageContainer}>
            <Image source={recipe.image?.uri ? { uri: recipe.image.uri } : recipe.image} style={styles.recipeImage} />
          </View>

          
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionIconText}>🥄</Text>
              <Text style={styles.sectionTitle}>Ingredientes</Text>
            </View>
            {ingredients.map((ingredient, index) => (
              <View key={index} style={styles.ingredientItem}>
                <View style={styles.ingredientBullet} />
                <Text style={styles.ingredientText}>{ingredient.name || ingredient}</Text>
              </View>
            ))}
          </View>

          
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionIconText}>👨‍🍳</Text>
              <Text style={styles.sectionTitle}>Modo de Preparo</Text>
            </View>
            {instructions.map((instruction, index) => (
              <View key={index} style={styles.instructionItem}>
                <View style={styles.instructionNumber}>
                  <Text style={styles.instructionNumberText}>{index + 1}</Text>
                </View>
                <Text style={styles.instructionText}>{instruction.text || instruction}</Text>
              </View>
            ))}
          </View>

          
          {tips.length > 0 && (
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionIconText}>💡</Text>
                <Text style={styles.sectionTitle}>Dicas do Chef</Text>
              </View>
              {tips.map((tip, index) => (
                <View key={index} style={styles.tipItem}>
                  <Text style={styles.tipText}>{tip}</Text>
                </View>
              ))}
            </View>
          )}

          
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionIconText}>⭐</Text>
              <Text style={styles.sectionTitle}>Avaliações</Text>
            </View>
            <View style={styles.ratingContainer}>
              <View style={styles.starsContainer}>{renderStars()}</View>
              <Text style={styles.ratingText}>{recipe.rating}</Text>
              <Text style={styles.reviewsText}>{recipe.reviews} avaliações</Text>
            </View>

            <TouchableOpacity style={styles.reviewButton}>
              <Text style={styles.reviewButtonIcon}>💬</Text>
              <Text style={styles.reviewButtonText}>Avaliar esta receita</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <BottomTabBar />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  scrollView: {
    flex: 1,
  },
  imageContainer: {
    position: "relative",
    height: 250,
  },
  headerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    flexDirection: "row",
    alignItems: "center",
  },
  backButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  content: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    paddingTop: 24,
    paddingHorizontal: 20,
  },
  recipeHeader: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#666",
    lineHeight: 22,
    marginBottom: 16,
  },
  authorSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  authorInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  authorAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  authorAvatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E0E0E0",
    marginRight: 12,
  },
  authorName: {
    fontSize: 14,
    color: "#333",
    fontWeight: "600",
  },
  authorDate: {
    fontSize: 12,
    color: "#999",
  },
  reviewCount: {
    fontSize: 12,
    color: "#666",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#F8F9FA",
    borderRadius: 12,
    paddingVertical: 16,
    marginBottom: 24,
  },
  statItem: {
    alignItems: "center",
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  statIconText: {
    fontSize: 18,
  },
  statValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
  },
  recipeImageContainer: {
    marginBottom: 24,
    borderRadius: 12,
    overflow: "hidden",
  },
  recipeImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  section: {
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionIconText: {
    fontSize: 24,
    marginRight: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    lineHeight: 32,
  },
  ingredientItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  ingredientBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#E85A4F",
    marginTop: 8,
    marginRight: 12,
  },
  ingredientText: {
    fontSize: 16,
    color: "#333",
    flex: 1,
    lineHeight: 22,
  },
  instructionItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  instructionNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#E85A4F",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    marginTop: 2,
  },
  instructionNumberText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  instructionText: {
    fontSize: 16,
    color: "#333",
    flex: 1,
    lineHeight: 22,
  },
  tipItem: {
    marginBottom: 12,
    backgroundColor: "#FFF9E6",
    padding: 12,
    borderRadius: 8,
  },
  tipText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },
  ratingContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  starsContainer: {
    flexDirection: "row",
    marginBottom: 8,
  },
  star: {
    fontSize: 24,
    color: "#E0E0E0",
    marginHorizontal: 2,
  },
  starFilled: {
    color: "#FFD700",
  },
  ratingText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  reviewsText: {
    fontSize: 14,
    color: "#666",
  },
  reviewButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8F9FA",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  reviewButtonIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  reviewButtonText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
})

export default RecipeDetailScreen
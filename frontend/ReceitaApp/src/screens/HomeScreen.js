import { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Image,
} from "react-native"
import RecipeCard from "../components/RecipeCard"
import BottomTabBar from "../components/BottomTabBar"
import { SafeAreaView } from "react-native-safe-area-context"
import { mockRecipes, categories } from "../data/mockRecipes"

const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todas")

  const recipes = mockRecipes

  const filteredRecipes =
    selectedCategory === "Todas"
      ? recipes.filter(
          (recipe) =>
            recipe.title.toLowerCase().includes(searchText.toLowerCase()) ||
            recipe.description.toLowerCase().includes(searchText.toLowerCase()),
        )
      : recipes.filter(
          (recipe) =>
            recipe.category === selectedCategory &&
            (recipe.title.toLowerCase().includes(searchText.toLowerCase()) ||
              recipe.description.toLowerCase().includes(searchText.toLowerCase())),
        )

  const handleRecipePress = (recipe) => {
    navigation.navigate("RecipeDetail", { recipe })
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.iconContainer}>
            <Image
              source={require("../../assets/icon.png")}
              style={styles.iconImage}
              resizeMode="contain"
            />
            <Text style={styles.iconText}>ReceitaHub</Text>
          </View>
          <Image
            source={require("../../assets/images/chefs/maria.png")}
            style={styles.userAvatar}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.subtitle}>Descubra receitas incríveis</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.searchSection}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar receitas..."
              value={searchText}
              onChangeText={setSearchText}
              placeholderTextColor="#999"
            />
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoriesContainer}
            contentContainerStyle={styles.categoriesContent}
          >
            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                style={[
                  styles.categoryButton,
                  selectedCategory === category && styles.categoryButtonActive,
                ]}
                onPress={() => setSelectedCategory(category)}
              >
                <Text
                  style={[
                    styles.categoryText,
                    selectedCategory === category && styles.categoryTextActive,
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.recipesSection}>
          <Text style={styles.sectionTitle}>Todas as receitas</Text>
          <Text style={styles.sectionSubtitle}>{filteredRecipes.length} receitas encontradas</Text>

          <View style={styles.recipesList}>
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} onPress={() => handleRecipePress(recipe)} />
            ))}
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
  header: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconImage: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  iconText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#E85A4F",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
  },
  content: {
    flex: 1,
  },
  searchSection: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    marginBottom: 8,
  },
  searchContainer: {
    marginBottom: 16,
  },
  searchInput: {
    backgroundColor: "#F8F9FA",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  categoriesContainer: {
    marginHorizontal: -20,
  },
  categoriesContent: {
    paddingHorizontal: 20,
  },
  categoryButton: {
    backgroundColor: "#F8F9FA",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  categoryButtonActive: {
    backgroundColor: "#E85A4F",
    borderColor: "#E85A4F",
  },
  categoryText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  categoryTextActive: {
    color: "#FFFFFF",
  },
  recipesSection: {
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  recipesList: {
    gap: 16,
  },
})

export default HomeScreen

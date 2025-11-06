import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native"

const BottomTabBar = () => {
  const navigation = useNavigation()
  const route = useRoute()

  const tabs = [
    { name: "Home", label: "Home", icon: "🏠" },
    { name: "Nova receita", label: "Nova receita", icon: "🍳" },
    { name: "Perfil", label: "Perfil", icon: "👤" },
  ]

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = route.name === tab.name
        return (
          <TouchableOpacity
            key={tab.name}
            style={styles.tab}
            onPress={() => navigation.navigate(tab.name)}
          >
            <Text style={[styles.icon, isActive && styles.activeIcon]}>{tab.icon}</Text>
            <Text style={[styles.label, isActive && styles.activeLabel]}>{tab.label}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
  },
  icon: {
    fontSize: 24,
    marginBottom: 4,
    opacity: 0.5,
  },
  activeIcon: {
    opacity: 1,
  },
  label: {
    fontSize: 12,
    color: "#666",
    fontWeight: "500",
  },
  activeLabel: {
    color: "#000",
    fontWeight: "600",
  },
})

export default BottomTabBar
"use client"

import { useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar, Image } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import CustomInput from "../components/CustomInput"
import CustomButton from "../components/CustomButton"

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = () => {
    // Simula um login sem API
    if (email && password) {
      navigation.navigate("Home") // Apenas navega
    } else {
      setError("Preencha o e-mail e a senha")
    }
  }

  const handleRegister = () => {
    navigation.navigate("Register")
  }

  return (
    <LinearGradient colors={["#FF7A6B", "#E85A4F"]} style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <View style={styles.formContainer}>
            {/* Icone */}
            <View style={styles.iconContainer}>
              <Image
                source={require("../../assets/icon.png")} // caminho do ícone
                style={styles.icon}
                resizeMode="contain"
              />
            </View>

            <Text style={styles.title}>Bem-vindo de volta!</Text>
            <Text style={styles.subtitle}>Entre na sua conta para descobrir novas receitas</Text>

            <View style={styles.form}>
              <CustomInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                placeholder=""
                style={styles.inputContainer}
              />

              <CustomInput
                label="Senha"
                value={password}
                onChangeText={setPassword}
                placeholder=""
                secureTextEntry
                style={styles.inputContainer}
              />

              {error ? <Text style={{ color: "red", marginBottom: 8 }}>{error}</Text> : null}

              <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
              </TouchableOpacity>

              <CustomButton title="Entrar" onPress={handleLogin} style={styles.loginButton} />

              <View style={styles.registerContainer}>
                <Text style={styles.registerText}>Não tem uma conta? </Text>
                <TouchableOpacity onPress={handleRegister}>
                  <Text style={styles.registerLink}>Cadastre-se</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: { flex: 1 },
  content: { flex: 1, justifyContent: "center", paddingHorizontal: 24 },
  formContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 32,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  iconContainer: { alignItems: "center", marginBottom: 24 },
  icon: { width: 100, height: 100 },
  title: { fontSize: 24, fontWeight: "bold", color: "#333", textAlign: "center", marginBottom: 8 },
  subtitle: { fontSize: 16, color: "#666", textAlign: "center", marginBottom: 32, lineHeight: 22 },
  form: { width: "100%" },
  inputContainer: { marginBottom: 16 },
  forgotPassword: { alignSelf: "flex-end", marginBottom: 24 },
  forgotPasswordText: { color: "#E85A4F", fontSize: 14 },
  loginButton: { marginBottom: 24 },
  registerContainer: { flexDirection: "row", justifyContent: "center", alignItems: "center" },
  registerText: { color: "#666", fontSize: 14 },
  registerLink: { color: "#E85A4F", fontSize: 14, fontWeight: "600" },
})

export default LoginScreen
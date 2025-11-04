import { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar, Image } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import CustomInput from "../components/CustomInput"
import CustomButton from "../components/CustomButton"

const RegisterScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleRegister = () => {
    navigation.navigate("Home")
  }

  const handleLogin = () => {
    navigation.navigate("Login")
  }

  return (
    <LinearGradient colors={["#FF7A6B", "#E85A4F"]} style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <View style={styles.formContainer}>
            <View style={styles.logoContainer}>
              <Image
                source={require("../../assets/icon.png")}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>

            <Text style={styles.title}>Crie sua conta</Text>
            <Text style={styles.subtitle}>Junte-se à nossa comunidade de chefs</Text>

            <View style={styles.form}>
              <CustomInput
                label="Nome Completo"
                value={fullName}
                onChangeText={setFullName}
                placeholder=""
                style={styles.inputContainer}
              />

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

              <CustomInput
                label="Confirmar senha"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder=""
                secureTextEntry
                style={styles.inputContainer}
              />

              <CustomButton title="Entrar" onPress={handleRegister} style={styles.registerButton} />

              <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Já tem uma conta? </Text>
                <TouchableOpacity onPress={handleLogin}>
                  <Text style={styles.loginLink}>Faça login</Text>
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
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  formContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 32,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  icon: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 32,
    lineHeight: 22,
  },
  form: {
    width: "100%",
  },
  inputContainer: {
    marginBottom: 16,
  },
  registerButton: {
    marginBottom: 24,
    marginTop: 8,
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    color: "#666",
    fontSize: 14,
  },
  loginLink: {
    color: "#E85A4F",
    fontSize: 14,
    fontWeight: "600",
  },
})

export default RegisterScreen
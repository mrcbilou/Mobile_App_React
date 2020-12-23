import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from "react-native";

function Login(props) {
  const image = require("../../assets/iphonewallpaper.jpg");
  const [value, onChangeText] = React.useState("Enter your Email");

  const emailValidation = () => {
    // props.navigation.navigate("Home");

    fetch(`https://loicricorest.azurewebsites.net/api/Employees/Email/${value}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson) {
          props.navigation.navigate("Home");
        } else {
          Alert.alert("Your email is not valid!");
        }
      });
  };

  

  return (
    
    <ImageBackground source={image} style={styles.image}>
      <Image style={styles.logo} source={require("../../assets/R2.png")} />
      <TextInput
        style={styles.textfieldContainer}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={emailValidation}
      >
        <Text style={styles.text}> Login </Text>
      </TouchableOpacity>
    </ImageBackground>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ebebeb",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#101010",
    fontSize: 24,
    fontWeight: "bold",
  },
  card: {
    width: 350,
    height: 250,
    borderRadius: 10,
    backgroundColor: "#101010",
    margin: 10,
    padding: 10,
    alignItems: "center",
  },
  cardText: {
    fontSize: 18,
    color: "#fffef8",
    marginBottom: 5,
  },
  inactiveText: {
    fontSize: 22,
    color: "#ff0900",
    marginBottom: 5,
  },
  activeText: {
    fontSize: 22,
    color: "#0bff29",
    marginBottom: 5,
  },
  buttonContainer: {
    width: 350,
    height: 50,
    alignItems: "center",
    backgroundColor: "#ff0900",
    borderRadius: 10,
    padding: 5,
    margin: 15,
  },
  activeButtonContainer: {
    width: 350,
    height: 50,
    alignItems: "center",
    backgroundColor: "#0bff29",
    borderRadius: 10,
    padding: 5,
    margin: 15,
  },
  textfieldContainer: {
    width: 350,
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 10,
    padding: 5,
    margin: 15,
  },
  logo: {
    width: 380,
    height: 125,
    padding: 20,
    margin: 15,
    alignItems: "center",
  },
});

export default Login;

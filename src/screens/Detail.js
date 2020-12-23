import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import axios from "axios";

function Detail({ navigation, route }) {
  const { item } = route.params;
  const [status, setStatus] = useState(() => item.status)

  const {
    id,
    serialNumber,
    elevatorModel,
    elevatorType,
    certificateOfInspection,
    dateOfCommissioning,
    dateOfLastInspection,
  } = item;
  const image = require("../../assets/wallpape.jpg");

  async function changeElevatorStatus() {
    const url = `https://loicricorest.azurewebsites.net/api/Elevators/ChangeActive/${id}`;

    await axios
      .get(url)
      .then((res) => {
        if (res.status == 200) {
          setStatus((prev) => "Active");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Elevator Id : {id}</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>Id: {id}</Text>

        {status === "Active" ? (
          <Text style={styles.activeText}>Current Status: {status}</Text>
        ) : (
          <Text style={styles.inactiveText}>Current Status: {status}</Text>
        )}

        <Text style={styles.cardText}>Serial Number: {serialNumber}</Text>
        <Text style={styles.cardText}>Model: {elevatorModel}</Text>
        <Text style={styles.cardText}>Type: {elevatorType}</Text>
        <Text style={styles.cardText}>
          Inspection Certificate: {certificateOfInspection}
        </Text>
        <Text style={styles.cardText}>
          Date of commissioning: {dateOfCommissioning}
        </Text>
        <Text style={styles.cardText}>
          Last Inspection: {dateOfLastInspection}
        </Text>

        {status === "Active" ? (
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.activeButtonContainer}>
            <Text style={styles.text}> Return Home </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => changeElevatorStatus()}
          >
            <Text style={styles.text}> Set Status to Active </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
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
    color: "#eee",
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
});

export default Detail;

import React, { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";

import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Button,
} from "react-native";

function Home(props) {
  const isFocused = useIsFocused();
  const [image, setImage] = useState(() => require("../../assets/nicefade.jpg"))
  const [state, setState] = useState(() => {
    return {
      isLoading: true,
      dataSource: [],
    }
  });

  useEffect(() => {
    getElevatorInfo();
  }, [])

  useEffect(() => {
    getElevatorInfo();
  }, [isFocused])

  function getElevatorInfo() {
    fetch("https://loicricorest.azurewebsites.net/api/Elevators/inactiveList")
      .then((response) => response.json())
      .then((responseJson) => {
        setState(() => {
          return {
            isLoading: false,
            dataSource: responseJson,
          }
        });
      });
  }

  const renderItem = ({ item }) => {
    const info = {
      id: item.id,
      status: item.elevator_status,
      serialNumber: item.serial_number,
      elevatorModel: item.elevator_model,
      elevatorType: item.elevator_type,
      certificateOfInspection: item.certificate_of_inspection,
      dateOfCommissioning: item.date_of_commissioning,
      dateOfLastInspection: item.date_of_last_inspection,
    };

    return (
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.item}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() =>
              props.navigation.navigate("Detail", { item: info })
            }
          >
            <Text style={styles.text}>
              Id: {item.id}, Status: {item.elevator_status}, Serial Number: {item.serial_number}
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  };
  
  return (
    <View style={styles.container}>
      {/* const dataSource = {(item, index)} */}
      <FlatList
        data={state.dataSource}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button
        style ={styles.logoutButtonContainer}
        onPress={() =>
        props.navigation.popToTop()}
        title="Logout"
      />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  item: {
    padding: 5,

    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    backgroundColor: "#949990",
    borderRadius: 5,
    padding: 10,
    margin: 20,
  },
  logoutButtonContainer: {
    backgroundColor: "red",
    borderRadius: 5,
    padding: 5,
    margin: 20,
    color: "#eee"
  }
});

// src/screens/Detail.js

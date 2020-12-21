import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

function Detail(props) {
  const { route } = props
  const { item } = route.params
  const { id, status, serialNumber, elevatorModel, elevatorType, certificateOfInspection, dateOfCommissioning, dateOfLastInspection } = item

  function changeElevatorStatus() {
    const url = `https://codeboxx-alexa.azurewebsites.net/api/Elevator/${id}`
    const someData = 'ACTIVE'
        
    const putMethod = {
        method: 'PUT', // Method itself
        headers: {
        'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
        },
        body: JSON.stringify(someData) // We send data in JSON format
    }
    
    // make the HTTP put request using fetch api
    fetch(url, putMethod)
    .then(response => response.json())
    .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
    .catch(err => console.log(err)) // Do something with the error
  }
  if (status != "ACTIVE"){
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Elevator Id : {id}</Text>
        <View style={styles.card}>
            <Text style={styles.cardText}>Id: {id}</Text>
            <Text style={styles.inactiveText}>Current Status: {status}</Text>
            <Text style={styles.cardText}>Serial Number: {serialNumber}</Text>
            <Text style={styles.cardText}>Model: {elevatorModel}</Text>
            <Text style={styles.cardText}>Type: {elevatorType}</Text>
            <Text style={styles.cardText}>Inspection Certificate: {certificateOfInspection}</Text>
            <Text style={styles.cardText}>Date of commissioning: {dateOfCommissioning}</Text>
            <Text style={styles.cardText}>Last Inspection: {dateOfLastInspection}</Text>
            <TouchableOpacity   
                style={styles.buttonContainer} 
                onPress ={changeElevatorStatus}>
                    <Text style = {styles.text}> Set Status to Active </Text>
            </TouchableOpacity>
        </View>
        </View>
    )
  } 
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Elevator Id : {id}</Text>
    <View style={styles.card}>
        <Text style={styles.cardText}>Id: {id}</Text>
        <Text style={styles.activeText}>Current Status: {status}</Text>
        <Text style={styles.cardText}>Serial Number: {serialNumber}</Text>
        <Text style={styles.cardText}>Model: {elevatorModel}</Text>
        <Text style={styles.cardText}>Type: {elevatorType}</Text>
        <Text style={styles.cardText}>Inspection Certificate: {certificateOfInspection}</Text>
        <Text style={styles.cardText}>Date of commissioning: {dateOfCommissioning}</Text>
        <Text style={styles.cardText}>Last Inspection: {dateOfLastInspection}</Text>
        <TouchableOpacity   
            style={styles.activeButtonContainer} 
            >
                <Text style = {styles.text}> Return Home </Text>
        </TouchableOpacity>
    </View>
    </View>
)
  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  },
  card: {
    width: 350,
    height: 250,
    borderRadius: 10,
    backgroundColor: '#101010',
    margin: 10,
    padding: 10,
    alignItems: 'center'
  },
  cardText: {
    fontSize: 18,
    color: '#fffef8',
    marginBottom: 5
  },
  inactiveText: {
    fontSize: 22,
    color: '#ff0900',
    marginBottom: 5
  },
  activeText: {
    fontSize: 22,
    color: '#0bff29',
    marginBottom: 5
  },
  buttonContainer: {
    width: 350,
    height: 50,
    alignItems: 'center',
    backgroundColor: '#ff0900',
    borderRadius: 10,
    padding: 5,
    margin: 15
  },
  activeButtonContainer: {
    width: 350,
    height: 50,
    alignItems: 'center',
    backgroundColor: '#0bff29',
    borderRadius: 10,
    padding: 5,
    margin: 15
  }
})

export default Detail
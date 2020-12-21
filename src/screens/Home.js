import React,{Component} from 'react'

import { StyleSheet, View, Text,FlatList,TouchableOpacity } from 'react-native'


export default class Home extends Component {
    

    constructor(props){
        super(props)
        this.state = {
            isLoading: true,
            dataSource:[]
        }
    }

    getElevatorInfo() {
        
        fetch('https://codeboxx-alexa.azurewebsites.net/api/Elevator/Active')
        .then((response)=> response.json())
        .then((responseJson) => {
            this.setState({
                isLoading: false,
                dataSource: responseJson
            })
            
        })
    }


   
 
    _renderItem = ({item, index}) => {
        const info ={
            id: item.id,
            status: item.elevator_status,
            serialNumber: item.serial_number,
            elevatorModel: item.elevator_model,
            elevatorType: item.elevator_type,
            certificateOfInspection: item.certificate_of_inspection,
            dateOfCommissioning: item.date_of_commissioning,
            dateOfLastInspection: item.date_of_last_inspection
        }
        return (
            <View style ={styles.item}>
                <TouchableOpacity   
                style={styles.buttonContainer} 
                onPress= {() => this.props.navigation.navigate('Detail',{ item: info })}>
                    <Text style = {styles.text}> Id:{item.id}, Status:{item.elevator_status}, Serial Number :{item.serial_number} </Text>
                </TouchableOpacity>
            </View>
        )
    }
    
    
    render(){
        
        this.getElevatorInfo()
        let{container} = styles
        let {dataSource, isLoading} = this.state
        return(
            <View style ={container}>
                <FlatList
                 data ={dataSource}
                 renderItem ={this._renderItem}
                 keyExtractor ={(item, index)=> index.toString()}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  item: {
    padding :5,
    borderBottomWidth :1,
    borderBottomColor: '#eee'
  },
  buttonContainer: {
    backgroundColor: '#ff7472',
    borderRadius: 5,
    padding: 10,
    margin: 20
  }
})




// src/screens/Detail.js

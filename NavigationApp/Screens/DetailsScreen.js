import React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

const DetailsScreen = ({navigation}) => {
    return (
    <View style={mystyles.container}>
        <Text style={mystyles.title}>Welcome to Details Screen</Text>
        <Text style={mystyles.head}>Name</Text>
        <Text style={mystyles.subhead}>Devansh Mehra</Text>
        <Text style={mystyles.head}>Current Posts</Text>
        <Text style={mystyles.subhead}>0</Text>
        <Text style={mystyles.head}>Followers</Text>
        <Text style={mystyles.subhead}>70</Text>    
        <Text style={mystyles.head}>Following</Text>
        <Text style={mystyles.subhead}>50</Text>
        <View>
          <Pressable style={mystyles.button} onPress={() => navigation.push('Details')}>
            <IonIcon name="ios-refresh" size={22} color="white" /><Text style={{color: 'white',fontSize: 16,}}>  Reload Page</Text>
          </Pressable>
        </View>
    </View>
    );
};

export default DetailsScreen;

const mystyles = StyleSheet.create({
    container: {
        flex: 1, 
        paddingHorizontal:30,
    },
    title: {
        fontSize: 24,
        alignSelf:'center',
        paddingTop: 60,
        paddingBottom:30,
        fontWeight: "bold",
        color: 'black'
    },
    button: {
        borderRadius: 10,
        backgroundColor: '#3244cd',
        marginTop:30,
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    head: {
        fontSize: 22,
        paddingTop: 10,
        paddingBottom: 5,
    },
    subhead: {
        fontSize: 18,
        paddingBottom: 5
  },
});
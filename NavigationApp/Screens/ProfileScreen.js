import React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = ({navigation}) => {
    return (
        <View style={mystyles.container}>
        <Text style={mystyles.title}>User Data</Text>
        <Text style={mystyles.head}>Name</Text>
        <Text style={mystyles.subhead}>Devansh Mehra</Text>
        <Text style={mystyles.head}>Username</Text>
        <Text style={mystyles.subhead}>devansh0512</Text>
        <Text style={mystyles.head}>Email</Text>
        <Text style={mystyles.subhead}>devanshmehra108@gmail.com</Text>
        <Text style={mystyles.head}>Followers</Text>
        <Text style={mystyles.subhead}>70</Text>    
        <Text style={mystyles.head}>Following</Text>
        <Text style={mystyles.subhead}>50</Text>
        <View>
          <Pressable style={mystyles.button} onPress={() => navigation.navigate('Home')}>
            <IonIcon name="ios-home" size={22} color="white" /><Text style={{color: 'white',fontSize: 16,}}>  Go To Home</Text>
          </Pressable>
        </View>
    </View>
    );
};


export default ProfileScreen;

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
        backgroundColor: '#009387',
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
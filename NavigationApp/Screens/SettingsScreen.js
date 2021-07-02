import React from 'react';
import { ScrollView, View, Text, Button, StyleSheet, Pressable } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

const SettingsScreen = ({navigation}) => {
    return (
    <ScrollView style={mystyles.container}>
        <Text style={mystyles.title}>Welcome to Settings{'\n'}</Text>
        <Text style={mystyles.head}>Default Settings</Text>
        <Text style={mystyles.subhead}>These are the default settings useful for beginners and new developers.These settings are automatically assigned to the application.</Text>
        <Text style={mystyles.head}>Custom Settings</Text>
        <Text style={mystyles.subhead}>These are the custom settings useful for amateur developers.Custom settings are similar to custom objects. Application developers can create custom sets of data and associate custom data for an organization, profile, or specific user. All custom settings data is exposed in the application cache, which enables efficient access without the cost of repeated queries to the database. Formula fields, validation rules, flows, Apex, and SOAP API can then use this data.</Text>
        <View>
          <Pressable style={mystyles.button} onPress={() => alert("The settings are saved.")}>
            <IonIcon name="save" size={22} color="white" /><Text style={{color: 'white',fontSize: 16,}}>  Save</Text>
          </Pressable>
        </View>
    </ScrollView>
    );
};

export default SettingsScreen;

const mystyles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingHorizontal:30,
  },
  title: {
    fontSize: 24,
    alignSelf:'center',
    paddingTop: 40,
    fontWeight: "bold",
    color: 'black'
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#7e956a',
    marginTop:30,
    marginBottom:30,
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
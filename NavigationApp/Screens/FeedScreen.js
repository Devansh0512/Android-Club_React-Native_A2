import React from 'react';
import { ScrollView, View, Text, Button, StyleSheet, Pressable } from 'react-native';

const FeedScreen = ({navigation}) => {
    return (
    <ScrollView style={mystyles.container}>
        <View >
          <View style={mystyles.feedcontainer}>
            <Text style={mystyles.title}>Devansh Mehra</Text>
            <Text style={{color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          </View>
        </View>
        <View >
          <View style={mystyles.feedcontainer}>
            <Text style={mystyles.title}>Aman Singh</Text>
            <Text style={{color:'black' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          </View>
        </View>
        <View >
          <View style={mystyles.feedcontainer}>
            <Text style={mystyles.title}>Akash Mishra</Text>
            <Text style={{color:'black' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          </View>
        </View>
        <View style={{paddingBottom:30}}>
          <View style={mystyles.feedcontainer}>
            <Text style={mystyles.title}>Shubham Sharma</Text>
            <Text style={{color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          </View>
        </View>
      </ScrollView>
    );
};

export default FeedScreen;

const mystyles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingHorizontal:30,
  },
  feedcontainer: {
    backgroundColor: "#f7cbe8",
    marginTop:25,
    borderRadius: 10,
    padding: 15
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: 'black',
    paddingBottom: 5
  },
});
import React from 'react';
import {View,Text,Button,StyleSheet,Pressable} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

const HomeScreen=({navigation})=>{
    // navigation.setOptions({
    //   headerRight:()=>(
    //     <Button title="Save" onPress={()=>{
    //       navigation.replace('Home');
    //     }}/>
    //   )
    // })
      return(
      <View style={mystyles.container}>
        <Text style={mystyles.title}>Welcome to the Home Page {'\n'}</Text>
        <Text style={{ paddingBottom: 40,fontSize: 18 }}>Click on a button to navigate to respective screen.{'\n\n'}For drawer Navigation, use side drawer to view other different screens.</Text>
        <Pressable style={mystyles.button} onPress={() => navigation.navigate('Details')}>
            <IonIcon name="ios-notifications" size={22} color="white" /><Text style={{fontSize: 16, color: 'white',}}>  Details Screen</Text>
        </Pressable>
        <Text>{'\n'}</Text>
        <Pressable style={mystyles.button} onPress={() => navigation.navigate('Saved')}>
            <IonIcon name="bookmark-outline" size={22} color="white" /><Text style={{fontSize: 16, color: 'white',}}>  Saved Data</Text>
        </Pressable>
    </View>
  );
};

export default HomeScreen;

const mystyles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal:30,
      alignItems: 'center', 
    },
    title: {
        paddingTop:60,
        alignSelf:'center',
        fontSize: 24,
        fontWeight: "bold"
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        width:200,
        backgroundColor: '#009387',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    }
});
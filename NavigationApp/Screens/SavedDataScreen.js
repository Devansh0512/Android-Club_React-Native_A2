import React from 'react';
import { ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

const SavedScreen = ({navigation}) => {
    return (
        <ScrollView>
            <View style={mystyles.container}>
                <Text style={mystyles.title}>Saved Posts</Text>
                <View >
                    <View style={mystyles.feedcontainer}>
                        <Text style={mystyles.ftitle}>Devansh Mehra</Text>
                        <Text style={{color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    </View>
                </View>
                <View >
                    <View style={mystyles.feedcontainer}>
                        <Text style={mystyles.ftitle}>Aman Singh</Text>
                        <Text style={{color:'black' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    </View>
                </View>
                <View >
                    <View style={mystyles.feedcontainer}>
                        <Text style={mystyles.ftitle}>Akash Mishra</Text>
                        <Text style={{color:'black' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    </View>
                </View>
                <View>
                    <Pressable style={mystyles.button} onPress={() => navigation.navigate('Home')}>
                        <IonIcon name="ios-home" size={22} color="black" /><Text style={{color: 'black',fontSize: 16,}}>  Go To Home</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
};

export default SavedScreen;

const mystyles = StyleSheet.create({
    container: {
        flex: 1, 
        paddingHorizontal:30,
    },
    feedcontainer: {
        backgroundColor: "#c7daf2",
        marginTop:25,
        borderRadius: 10,
        padding: 15
    },
    title: {
        fontSize: 24,
        alignSelf:'center',
        paddingTop: 60,
        paddingBottom:30,
        fontWeight: "bold",
        color: 'black'
    },
    ftitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: 'black',
        paddingBottom: 5
    },
    button: {
        borderRadius: 10,
        backgroundColor: '#c7daf2',
        marginTop:30,
        marginBottom:30,
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
});
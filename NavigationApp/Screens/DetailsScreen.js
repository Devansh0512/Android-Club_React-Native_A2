import React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

const DetailsScreen = ({navigation}) => {
    return (
    //   <View style={styles.container}>
    //     <Text>Details Screen</Text>
    //     <Button
    //         title="Go to details screen...again"
    //         onPress={() => navigation.push("Details")}
    //     />
    //     <Button
    //         title="Go to home"
    //         onPress={() => navigation.navigate("Home")}
    //     />
    //   </View>
    <View style={styles.container}>
        <Text style={styles.titleText}>Details Screen</Text>
        <Text style={styles.detSub}>Easy to Use</Text>
        <Text style={styles.detSub2}>Start quickly with built-in navigators that deliver a seamless out-of-the-box experience.</Text>
        <Text style={styles.detSub}>Components built for iOS and Android</Text>
        <Text style={styles.detSub2}>Platform-specific look-and-feel with smooth animations and gestures.</Text>
        <Text style={styles.detSub}>Completely customizable</Text>
        <Text style={styles.detSub2}>If you know how to write apps using JavaScript you can customize any part of React Navigation.</Text>    
        <Text style={styles.detSub}>Extensible platform</Text>
        <Text style={styles.detSub2}>React Navigation is extensible at every layer— you can write your own navigators or even replace the user-facing API.</Text>
        <View style={{ paddingTop: 30 }}>
          <Pressable style={styles.buttonLower} onPress={() => navigation.navigate('Contributing')}>
            <IonIcon name="globe" size={22} color="white" /><Text style={styles.textLower}>  Contributing to React Native</Text>
          </Pressable>
        </View>
    </View>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        paddingHorizontal:30,
        paddingRight:30
    },
    titleText: {
      fontSize: 24,
      fontWeight: "bold",
      color: 'black'
    },
    buttonLower: {
      borderRadius: 10,
      backgroundColor: 'black',
      paddingHorizontal: 15,
      paddingVertical: 10,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
    },
    detSub: {
        fontSize: 19,
        paddingTop: 10,
        paddingBottom: 5,
    },
    detSub2: {
    fontSize: 14,
    paddingBottom: 5
  },
});
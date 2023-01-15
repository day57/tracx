//imports 
import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';


// declaring the component as a function
export default function Home(){

    // setting useState variables
    // addrress is user city and state after getting the location variable
    // location is exact coordinates of the location
    //error message for callbacks when getting awaiting information from user
    const [ location, setLocation ] = useState(null);
    const [ errorMsg, setErrorMsg ] = useState(null);
    const [ address, setAddress ] = useState(null);

    useEffect(() => {
        (async () => {
            // awaiting a response from the user to run the Location.requestForegroundPermissionsAsync() funtion which allows us the usser to share location information with the app
            let { status } = await Location.requestForegroundPermissionsAsync();
            //since js is async it will run this before setting location to verify the app has permession
            if ( status !== 'granted' ) {
                alert (
                    'this appliction needs permissions to run correctly'
                    
                )
                setAddress('cannot get address due to user permissions')
                return;
            }
            // retireving and setting location data
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);

            // Use reverse geocoding to get the city and state
            let address = await Location.reverseGeocodeAsync(location.coords);
            setAddress(address[0].city + "," + address[0].region);

        })();
    }, [])
    

    
    let text = "waiting"
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = address;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>{text}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItem: 'center',
        justifyContent:'center',

    },
    
    paragraph: {
        alignItem: 'center',
        justifyContent:'center',
    }

})
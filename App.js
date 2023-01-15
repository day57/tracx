import React from "react";
import LoginForm from "./components/LoginForm";
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Navigation from "./components/Navigation";
import Home from "./components/Home";


export default function App() {


  return (
    <View style={styles.container}>

    <Home/>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
 
});

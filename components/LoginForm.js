import React, {useState} from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native';

const LoginForm = () => {
    const [ email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (e) => {
        
        alert (
            `hello ${email} `
        )
        return email
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <TextInput
                style={styles.input}
                placeholder="password"
                value={password}
                onChangeText={text => setPassword(text)}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
            />
            <Button title="Login" onPress={handleSubmit} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItem: 'center',
        justifyContent: 'center',
        width: '80%'
    },
    input: {
        
   
        width: '100%',
        height: 60,
        borderColor: 'gray',
        borderWidth: 1, 
        marginBottom: 10,
        padding: 10,
        fontSize: 30,
        justifyContent: 'center',
        alignItems:'stretch'
    },
})

export default LoginForm;
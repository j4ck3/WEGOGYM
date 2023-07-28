import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useState } from 'react'
import { Link } from 'expo-router';

import { useAuth } from './contexts/authContext';


const Login = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const { login } = useAuth();

    const handleLogin = async () => {
        const result = await login(email, password);
        if (result && result.error) {
            alert(result.error);
        }
    };

    return (
        <View style={styles.container}>
                <Text>Login</Text>
                <TextInput style={styles.textInput} placeholder='Email' onChangeText={(text) => setEmail(text)} value={email} />
                <TextInput style={styles.textInput} placeholder='Password' onChangeText={(text) => setPassword(text)} value={password} secureTextEntry={true} />
                <Button title="Login" onPress={login} />
                <Text style={{ margin: 10 }}>Or</Text>
                <Link style={styles.link} href="/register">Register</Link>
                <Link style={styles.link} href="/home">Log in as guest</Link>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    link: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue',
    },
    textInput: {
        width: 250,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        fontSize: 16,
        color: '#333',
        margin: 5,
    },

})

export default Login;
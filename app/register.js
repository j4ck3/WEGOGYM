import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react'
import { Link, useRouter} from 'expo-router';
import axios from 'axios';
import { useAuth } from './contexts/authContext';
import Constants from 'expo-constants';


const Signup = () => {
    const [ userName, setUserName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const API_URI = 'http://10.0.2.2:5000'
    const router = useRouter();
    const backendUrl = Constants.manifest.extra.backendUrl;
    //const { register } = useAuth();

    const handleRegister = async () => {
        try {
            const res = await axios.post(`${API_URI}/authentication/signup`, { email, userName, password });
            if (res.status === 201) {
                setUserName('');
                setEmail('');
                setPassword('');


                //redirect to login
                router.replace('/login')
            } else {
                Alert.alert('Registration failed', res.statusText);
                return res.data;
            }
        }
         catch (error) {
            return console.error(error);
        }
    };
    
    return (
        <View style={styles.container}>
            <Text>Register Your Account</Text>
            <TextInput style={styles.textInput} placeholder='User Name' onChangeText={(text) => setUserName(text)} value={userName} />
            <TextInput style={styles.textInput} placeholder='Email' onChangeText={(text) => setEmail(text)} value={email} />
            <TextInput style={styles.textInput} placeholder='Password' onChangeText={(text) => setPassword(text)} value={password} secureTextEntry={true} />
            <Button title="REGISTER" onPress={ handleRegister } />
            <Text style={{ margin: 10 }}>Or</Text>
            <Link style={styles.link} href="/login">Login</Link>
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

export default Signup;
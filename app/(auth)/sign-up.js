import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react'
import { useRouter } from 'expo-router';
import { useAuth } from '../contexts/authContext';


const Signup = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const router = useRouter();
    const { signup } = useAuth();

const handleRegister = async () => {
    try {
      if (!userName || userName === '' || !email || email === '' || !password || password === '') {
        setError('Please fill in all the fields.');
      } else {
        const res = await signup(email, password, userName)
        if (res.status === 201) 
            router.replace('/sign-in')
      }
    } catch (error) {}
  };
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Register Your Account</Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            <TextInput style={styles.textInput} placeholder='User Name' onChangeText={(text) => setUserName(text)} value={userName} placeholderTextColor='#898989' />
            <TextInput style={styles.textInput} placeholder='Email' onChangeText={(text) => setEmail(text)} value={email} placeholderTextColor='#898989' />
            <TextInput style={styles.textInput} placeholder='Password' onChangeText={(text) => setPassword(text)} value={password} secureTextEntry={true} placeholderTextColor='#898989' />

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <Text style={styles.seperator}>Or</Text>
            
            <TouchableOpacity style={styles.secondButton} onPress={() => router.replace('/sign-in')}>
                <Text style={styles.secondButtonText}>Sign In</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    header: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        marginTop: 10,
    },
    textInput: {
        width: 250,
        height: 40,
        color: 'white',
        borderColor: '#333',
        borderWidth: 1,
        borderRadius: 50,
        paddingLeft: 20,
        fontSize: 16,
        margin: 5,
    },
    button: {
        width: 250,
        height: 40,
        borderRadius: 50,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'white',
        margin: 5,
        lineHeight: 40,
    },
    secondButton: {
        width: 250,
        height: 40,
        borderRadius: 50,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        borderWidth: 2,
        borderColor: 'white',
    },
    buttonText: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 40,
    },
    secondButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 40,
    },
    seperator: {
        color: 'white'
    }
})

export default Signup;
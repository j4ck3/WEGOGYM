import { Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { useState } from 'react'
import { useRouter } from 'expo-router';
import { useAuth } from '../contexts/authContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const { signin } = useAuth();



    const handleLogin = async () => {
        try {
            const res = await signin(email, password)
            if(res.error == true)
                setError(res?.msg.text)

            } catch (error) {
                setError(error.response?.data.text)
            }
          };


    return (
        <KeyboardAvoidingView style={styles.container}>
             <Text style={styles.header}>Log In</Text>
             {error ? <Text style={styles.errorText}>{error}</Text> : null}
            <TextInput style={styles.textInput} placeholder='Email' onChangeText={(text) => setEmail(text)} value={email} placeholderTextColor='#898989' autoCapitalize='none' />
            <TextInput style={styles.textInput} placeholder='Password' onChangeText={(text) => setPassword(text)} value={password} secureTextEntry={true}  placeholderTextColor='#898989' autoCapitalize='none'/>
            <TouchableOpacity style={styles.button} onPress={ handleLogin }>
                <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
            <Text style={styles.seperator}>Or</Text>
            <TouchableOpacity style={styles.secondButton} onPress={ () => router.replace('/sign-up') }>
                <Text style={styles.secondButtonText}>Sign Up</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};
const styles = StyleSheet.create({
    header: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        marginTop: 10,
      },
    buttonText: {
        color: 'black',
        fontSize: 16,
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
    textInput: {
        width: 250,
        height: 40,
        borderColor: '#333',
        borderWidth: 1,
        borderRadius: 50,
        paddingLeft: 10,
        fontSize: 16,
        color: 'white',
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
        margin: 10,
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
    seperator: {
        color: 'white'
    }
})

export default Login;
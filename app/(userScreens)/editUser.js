import { SafeAreaView, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react'
import { useRouter, useSearchParams } from 'expo-router';
import { useAuth } from '../contexts/authContext';


const EditUser = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('')

  const router = useRouter();
  const { update } = useAuth();


const handleEditUser = async () => {
    try {
      if (!userName || userName === '' || !email || email === '') {
        setError('Please fill in all the fields.');
      } else {
        const res = await update(email, userName, description)
        if (res.status === 201) 
            router.replace('/(tabs)/account')
      }
    } catch (error) {}
  };
    return (
        <SafeAreaView style={styles.container}> 
            <Text style={styles.header}>Edit your account</Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            <TextInput style={styles.textInput} placeholder='User Name' onChangeText={(text) => setUserName(text)} value={userName} placeholderTextColor='#898989' />
            <TextInput style={styles.textInput} placeholder='Email' onChangeText={(text) => setEmail(text)} value={email} placeholderTextColor='#898989' />
            <TextInput style={styles.textInput} placeholder='About me' onChangeText={(text) => setDescription(text)} value={description} placeholderTextColor='#898989' />

            <TouchableOpacity style={styles.button} onPress={ handleEditUser }>
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
        </SafeAreaView>
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
    buttonText: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 40,
    },
})

export default EditUser;
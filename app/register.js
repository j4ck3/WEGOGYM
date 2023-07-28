import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Link } from 'expo-router';
const Register = () => {
    return (
        <View style={styles.container}>
            <Text>Register new account</Text>
            <TextInput style={styles.textInput} placeholder='User Name' />
            <TextInput style={styles.textInput} placeholder='Email' />
            <TextInput style={styles.textInput} placeholder='Password' secureTextEntry={true} />
            {/* <Button onPress={login} /> */}
            <Link style={styles.link} href="/home">Login</Link>
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

export default Register;
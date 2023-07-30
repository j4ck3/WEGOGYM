import { Link } from 'expo-router'
import { View, Text, StyleSheet } from 'react-native'
import { AuthProvider } from './contexts/authContext';
const Index = () => {

    return (
        <AuthProvider>
          <View style={styles.container}>
            <Text style={styles.header}>WEGOGYM</Text>
            <Link style={styles.button} href="/login">Login</Link>
            <Link style={styles.button} href="/register">Register</Link>
            <Link style={styles.button} href="/home">Log in as guest</Link>
          </View>
      </AuthProvider>
    );
}
export default Index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    header: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 10,
    },
    button: {
        width: 250,
        height: 40,
        borderWidth: 5,
        borderRadius: 50,
        paddingLeft: 10,
        fontSize: 16,
        color: 'black',
        margin: 5,
        textAlign: 'center',
        lineHeight: 40,
        backgroundColor: 'white',
    },

})
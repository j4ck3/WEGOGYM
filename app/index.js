import { Link } from 'expo-router'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

const Index = () => {
    // const { user } = useAuth();

    // if (user) {
    //     return <Redirect href="/home" />;
    // }

    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <TextInput style={styles.textInput} placeholder='Email' />
            <TextInput style={styles.textInput} placeholder='Password' secureTextEntry={true} />
            {/* <Button onPress={login} /> */}

            <Text style={{ margin: 10 }}>Or</Text>
            <Link style={styles.link} href="/register">Register</Link>
            <Link style={styles.link} href="/home">Log in as guest</Link>
        </View>
    );
}
export default Index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0'
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
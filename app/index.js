import { Link } from 'expo-router'
import { View, Text, StyleSheet } from 'react-native'

const Index = () => {
    return (
        <View style={styles.container}>
            <Text>Choose login method</Text>
            <Link style={styles.link} href="/home">Log in as guest</Link>
            <Text>More login methods comming soon</Text>
        </View>
    );
}
export default Index;

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

})
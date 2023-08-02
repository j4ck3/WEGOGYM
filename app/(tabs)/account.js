import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons  } from '@expo/vector-icons';
import { useAuth } from '../contexts/authContext'



const Account = () => {
  const { signout, user } = useAuth();

  const handleLogout = async () => {
    signout()
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.buttonText}>{user?.email}</Text>
      <Text style={styles.buttonText}>{user?.userName}</Text>
      <TouchableOpacity style={styles.buttonContainer} onPress={ handleLogout }>
        <Text style={styles.buttonText}>Log Out  <MaterialCommunityIcons name="logout" size={18} color="red" /></Text>
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
  buttonContainer: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 32,
    alignSelf: 'stretch',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


export default Account;
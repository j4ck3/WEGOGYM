import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'
import { MaterialCommunityIcons  } from '@expo/vector-icons';
import { useAuth } from '../contexts/authContext'



const Account = () => {
  const { signout, user } = useAuth();
  const router = useRouter(); 
  const handleLogout = async () => {
    signout()
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>{'Hello ' + user?.userName + '!'}</Text>
      <TouchableOpacity style={styles.buttonContainer} onPress={ () => router.push('(userScreens)/editUser') }>
        <Text style={styles.buttonText}>Edit Account <MaterialCommunityIcons name="account-edit" size={18} color="black" /></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={ handleLogout }>
        <Text style={styles.buttonTextSignout}>Log Out  <MaterialCommunityIcons name="logout" size={18} color="red" /></Text>
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
    color: 'red',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextSignout: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


export default Account;
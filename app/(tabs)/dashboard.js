import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { useEffect } from 'react';
import { useUserContext } from '../contexts/userContext';


const Dashboard = () => {
    const { getAllUsers, users } = useUserContext()

  useEffect(() => {
    getAllUsers();
  }, []);


  const ListItem = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <View style={styles.listItemData}>
          <Text style={styles.userName}>{item.userName}</Text>
          <Text style={styles.email}>{item.email}</Text>
        </View>


        <View style={styles.listItemActions}>
          <TouchableOpacity>
            <Text>View</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };



  return (
    <View style={styles.container}>
     <Text style={styles.header}>Manage Users</Text>
      <ScrollView contentContainerStyle={styles.ScrollView}>
        {users.map((item) => (
          <ListItem key={item._id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
  
};

const styles = StyleSheet.create({
  header: {
    margin: 30,
    fontWeight: 'bold',
    fontSize: 22,
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 100, 0.2)',
    padding: 20,
    borderRadius: 5,
    margin: 10
  },
  listItemData: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    marginEnd: 10,
    fontWeight: 'bold',
    fontSize: 16

  },
  email: {
    color: '#454545',

  },
});

export default Dashboard;
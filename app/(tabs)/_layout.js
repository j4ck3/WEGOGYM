import { Tabs } from 'expo-router';
import { Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: () => <Text>🏠</Text>
                }}
            />
            <Tabs.Screen
                name="account"
                options={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: 'white',
                    headerShown: false,
                    tabBarIcon: () => <MaterialCommunityIcons name="account" size={30} color="black" />
                }}
            />
            <Tabs.Screen
                name="dashboard"
                options={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: 'white',
                    headerShown: false,
                    tabBarIcon: () => <FontAwesome name="users" size={24} color="black" />
                }}
            />
        </Tabs>
    );
};
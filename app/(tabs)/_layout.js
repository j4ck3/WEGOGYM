import { Tabs } from 'expo-router';
import { Text } from 'react-native';

export default () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    tabBarLabel: 'Home',
                    headerTitle: 'Home Screen',
                    tabBarIcon: () => <Text>🏠</Text>
                }}
            />
            <Tabs.Screen
                name="list"
                options={{
                    tabBarLabel: 'Account',
                    headerTitle: 'Your Account',
                    tabBarIcon: () => <Text>💅</Text>
                }}
            />
        </Tabs>
    );
};
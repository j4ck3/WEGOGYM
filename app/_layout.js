import { Stack } from 'expo-router';
import { AuthProvider } from './contexts/authContext';
import { UserContextProvider } from './contexts/userContext';
const Root = () => {
    return (
        <AuthProvider>
            <UserContextProvider>
                <Stack
                    screenOptions={{
                        headerTitle: '',
                        headerTransparent: true,
                        headerTintColor: 'white'
                    }}
                    >
                    <Stack.Screen
                        name="(tabs)"
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack>
            </UserContextProvider>
        </AuthProvider>

    );
};

export default Root;
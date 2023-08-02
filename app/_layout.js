import { Stack } from 'expo-router';
import { AuthProvider } from './contexts/authContext';
const Root = () => {
    return (
        <AuthProvider>
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
        </AuthProvider>

    );
};

export default Root;
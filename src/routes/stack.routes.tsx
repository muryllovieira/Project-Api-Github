import { createStackNavigator } from '@react-navigation/stack'
const { Screen, Navigator } = createStackNavigator()

import { HomeTemplate } from '../atomic/templates/HomeTemplate'
import { RepositoryTemplate } from '../atomic/templates/RepositoryTemplate'

export type RootStackParamList = {
    home: undefined;
    projects: { username: string };
}
const Stack = createStackNavigator<RootStackParamList>();

export function StackRoutes() {
    return (
        <Stack.Navigator initialRouteName='home'>
            <Stack.Screen
                name='home'
                component={HomeTemplate}
                options={{
                    title: 'Main Menu',
                    headerTitleAlign: 'center',
                    headerTintColor: 'white',
                    headerTransparent: true,
                    headerShown: false
                }}

            />

            <Stack.Screen
                name='projects'
                component={RepositoryTemplate}
                options={{
                    title: 'Projects Menu',
                    headerTitleAlign: 'center',
                    headerTintColor: 'white',
                    headerTransparent: true,
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}
import { createStackNavigator } from "@react-navigation/stack";
const { Screen, Navigator } = createStackNavigator();

import { HomeTemplate } from "../atomic/templates/HomeTemplate";
import { RepositoryTemplate } from "../atomic/templates/RepositoryTemplate";
import { SplashTemplate } from "../atomic/templates/SplashTemplate";
import { StatusBar } from "expo-status-bar";

export type RootStackParamList = {
  home: undefined;
  projects: { username: string };
  splash: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();

export function StackRoutes() {
  return (
    <>
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen
          name="splash"
          component={SplashTemplate}
          options={{
            title: "Home",
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerTransparent: true,
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="home"
          component={HomeTemplate}
          options={{
            title: "Home",
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerTransparent: true,
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="projects"
          component={RepositoryTemplate}
          options={{
            title: "Projetos do Usuário",
            headerTitleAlign: "center",
            headerTintColor: "#FFF",
            headerStyle: {
              backgroundColor: "#332332",
              elevation: 0,
              shadowOpacity: 0,
            },
          }}
        />
      </Stack.Navigator>

      <StatusBar backgroundColor="#332332" style="light" />
    </>
  );
}

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./src/pages/home/Home";
import Search from "./src/pages/search/Search";
import { Register } from "./src/pages/register/Register";
import { Login } from "./src/pages/login/Login";

const Stack = createNativeStackNavigator();

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "",
            headerTransparent: true,
            headerShadowVisible: false,
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            title: "",
            headerTransparent: true,
            headerShadowVisible: false,
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: "",
            headerTransparent: true,
            headerShadowVisible: false,
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "",
            headerTransparent: true,
            headerShadowVisible: false,
            headerBackVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

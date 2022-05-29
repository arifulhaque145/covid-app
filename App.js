import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import Home from "./src/screens/home";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    graphik: require("./assets/fonts/graphik.otf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

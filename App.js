//import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import react from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'

// import * as firebase from "firebase/app";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyABILoPoVjSTuY11Itanek6jtf2PqIIrCA",
//   authDomain: "kontract-test.firebaseapp.com",
//   projectId: "kontract-test",
//   storageBucket: "kontract-test.appspot.com",
//   messagingSenderId: "1001992393167",
//   appId: "1:1001992393167:web:942123636ddb32bbf6c2ba"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

import HomeScreen from './screens/HomeScreen';
import OnboardingScreen from './screens/OnboardingScreen';


const appStack = createStackNavigator();

const App = () => {
return (
  <NavigationContainer>
    <appStack.Navigator>
      <appStack.Screen name="Onboarding" component={OnboardingScreen} />
      <appStack.Screen name="Home" component={HomeScreen} />
    </appStack.Navigator>
  </NavigationContainer>
);

}

export default App;




















// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'lightblue',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

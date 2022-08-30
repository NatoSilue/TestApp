import react from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
          <Text>Welcome to Kontract!</Text>
          <Button title="Connect"/>
          <StatusBar style="auto" />
        </View>
      );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
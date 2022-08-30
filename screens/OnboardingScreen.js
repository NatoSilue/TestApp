import react from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = () => {
    return (
    //     const Skip = ({...props}) =>

        <Onboarding
        pages={[
            {
                backgroundColor: 'blue',
                image: <Image source={require('../assets/contract.png')} />,
                title: 'Welcome to Kontract',
                subtitle: 'This app will allow you to sign contracts from your living room in seconds!',
            },
            {
                backgroundColor: 'lightblue',
                image: <Image source={require('../assets/icon.png')} />,
                title: 'Features',
                subtitle: 'This app will give you the ability to do Forwards, Options and Swaps!',
            },
            {
                backgroundColor: 'yellow',
                image: <Image source={require('../assets/icon.png')} />,
                title: 'Welcome Onboard',
                subtitle: 'We hope you enjoy your experience with Kontract!',
            }
        
        ]} /> 
     );

}
export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgreen',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
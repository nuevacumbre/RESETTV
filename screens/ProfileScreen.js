import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
//import CameraComponent from './src/cameraComponent';Platform

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button
      title="Click Here"
      onPress={() => alert('Button Clicked!')}
      />
    </View>
  );
};

export default ProfileScreen;

//export default class App extends Component{
//  render(){
//    return <CameraComponent></CameraComponent>
//  }
//}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

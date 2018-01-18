import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';

export const { height, width } = Dimensions.get('window');

const car = require('./car.png');

class ProfileScreen extends React.Component {
  static navigationOptions = {
    //title: 'Profile',
    header: null,
  };
  render() {
    const { navigate, goBack } = this.props.navigation;
    return (
      <View
        style={{
          backgroundColor: 'green',
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <Image
          source={car}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height,
            resizeMode: 'cover',
            backgroundColor: 'red',
          }}
        />
        <Button
          title="Go to Jane's profile"
          onPress={() =>
            goBack()
          }
        />
      </View>
    );
  }
}

export default ProfileScreen;

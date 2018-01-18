import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class HomeScreen extends React.Component {
  static navigatorStyle = {
    navBarHidden: true,
    statusBarHidden: true,
    statusBarHideWithNavBar: true,
  };

  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View
        style={{
          backgroundColor: 'blue',
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigate('Profile', { name: 'Jane' })
          }
        />
      </View>
    );
  }
}

export default HomeScreen;

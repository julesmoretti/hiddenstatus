import {
  StackNavigator,
} from 'react-navigation';

import HomeScreen from './src/HomeScreen.js';
import ProfileScreen from './src/ProfileScreen.js';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});

export default App;

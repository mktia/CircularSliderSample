import { createAppContainer, createStackNavigator } from 'react-navigation';

import SliderPage from './src/pages/SliderPage';

const App = createStackNavigator({
  Home: { screen: SliderPage }
});

export default createAppContainer(App);


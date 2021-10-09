// import * as React from 'react';
// import {View, Text, StyleSheet, Button} from 'react-native';
// import SplashScreen from 'react-native-splash-screen';
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';

// function Home(props) {
//   return (
//     <View style={styles.eachView}>
//       <Text> 홈 화면 입니다.</Text>
//       <Button
//         title="쇼핑 카트 화면으로 가기"
//         onPress={() => props.navigation.navigate('ShoppingCart')}
//       />
//       <Button
//         title="설정 화면으로 가기"
//         onPress={() => props.navigation.navigate('Setting')}
//       />
//     </View>
//   );
// }
// function ShoppingCart(props) {
//   return (
//     <View style={styles.eachView}>
//       <Text> 쇼핑 카트 화면 입니다.</Text>
//       <Button
//         title="홈 화면으로 가기"
//         onPress={() => props.navigation.navigate('Home')}
//       />
//     </View>
//   );
// }

// function Setting(props) {
//   return (
//     <View style={styles.eachView}>
//       <Text> 설정 화면 입니다.</Text>
//       <Button
//         title="홈 화면으로 가기"
//         onPress={() => props.navigation.navigate('Home')}
//       />
//     </View>
//   );
// }

// const App = createStackNavigator(
//   {
//     ShoppingCart: {
//       screen: ShoppingCart,
//     },
//     Home: {
//       screen: Home,
//     },
//     Setting,
//   },
//   {
//     initialRouteName: 'Home',
//   },
// );

// const AppContainer = createAppContainer(App);

// function ilikeShopping() {
//   setTimeout(() => {
//     SplashScreen.hide();
//   }, 500);

//   return <AppContainer />;
// }

// const styles = StyleSheet.create({
//   centerView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   eachView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default ilikeShopping;
import * as React from 'react';
// import {View, Text, StyleSheet, Button} from 'react-native';
// import SplashScreen from 'react-native-splash-screen';
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from './components/HomeScreen';
import ShoppingCartScreen from './components/ShoppingCartScreen';
import SettingScreen from './components/SettingScreen';
import StorageScreen from './components/StorageScreen';
import SplashScreen from 'react-native-splash-screen';

// export default createAppContainer(TabNavigator);
export default function App() {
  const TabNavigator = createBottomTabNavigator({
    Home: {
      screen: HomeScreen,
    },
    ShoppingCart: {
      screen: ShoppingCartScreen,
    },
    Storage: {
      screen: StorageScreen,
    },
    Setting: {
      screen: SettingScreen,
    },
  });

  setTimeout(() => {
    SplashScreen.hide();
  }, 500);

  return createAppContainer(TabNavigator);
}

// function ilikeShopping() {
//   setTimeout(() => {
//     SplashScreen.hide();
//   }, 500);

//   return <AppContainer />;
// }

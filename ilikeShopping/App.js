import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

function Home() {
  return (
    <View style={styles.eachView}>
      <Text> 홈 화면 입니다.</Text>
      <Button
        title="쇼핑 카트 화면으로 가기"
        onPress={() => this.props.navigation.navigate('ShoppingCart')}
      />
      <Button
        title="설정 화면으로 가기"
        onPress={() => this.props.navigation.navigate('Setting')}
      />
    </View>
  );
}
function ShoppingCart() {
  return (
    <View style={styles.eachView}>
      <Text> 쇼핑 카트 화면 입니다.</Text>
      <Button
        title="홈 화면으로 가기"
        onPress={() => this.props.navigation.navigate('Home')}
      />
    </View>
  );
}

function Setting() {
  return (
    <View style={styles.eachView}>
      <Text> 설정 화면 입니다.</Text>
      <Button
        title="홈 화면으로 가기"
        onPress={() => this.props.navigation.navigate('Home')}
      />
    </View>
  );
}

const App = createStackNavigator(
  {
    ShoppingCart: {
      screen: ShoppingCart,
    },
    Home: {
      screen: Home,
    },
    Setting,
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(App);

function ilikeShopping() {
  setTimeout(() => {
    SplashScreen.hide();
  }, 500);

  return <AppContainer />;
}

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eachView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ilikeShopping;

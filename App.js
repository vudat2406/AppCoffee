import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Other from './src/screens/other/other'
import Tichdiem from './src/screens/tichdiem'
import Login from './src/screens/login'
import Home from './src/screens/home'
import Order from './src/screens/order'
import Store from './src/screens/store'
import A from './a'
export default function App() {

  const HomeStack = createNativeStackNavigator();
  const OrderStack = createNativeStackNavigator();
  const StoreStack = createNativeStackNavigator();
  const TichdiemStack = createNativeStackNavigator();
  const OtherStack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function HomeStackScreen() {
    return (
      <HomeStack.Navigator >
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen name="Login" component={Login} options={{
            headerShown: false,
        }}/>
      </HomeStack.Navigator>
    );
  }
  function OrderStackScreen() {
    return (
      <OrderStack.Navigator>
        <HomeStack.Screen name="Order" component={Order} />
      </OrderStack.Navigator>
    );
  }
  function StoreStackScreen() {
    return (
      <StoreStack.Navigator>
        <HomeStack.Screen name="Store" component={Store} />
      </StoreStack.Navigator>
    );
  }
  function TichdiemStackScreen() {
    return (
      <TichdiemStack.Navigator>
        <HomeStack.Screen name="Tichdiem" component={Tichdiem} />
      </TichdiemStack.Navigator>
    );
  }
  function OtherStackScreen() {
    return (
      <OtherStack.Navigator>
        <HomeStack.Screen name="Other" component={Other} />
      </OtherStack.Navigator>
    );
  }
  return (
    <NavigationContainer >
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Trang ch???') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === '?????t h??ng') {
            iconName = focused ? 'cafe' : 'cafe-outline';
          } else if (route.name === 'C???a h??ng') {
            iconName = focused ? 'briefcase' : 'briefcase-outline';
          } else if (route.name === 'T??ch ??i???m') {
            iconName = focused ? 'gift' : 'gift-outline';
          } else if (route.name === 'Kh??c') {
            iconName = focused ? 'menu' : 'menu-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false
        })}
      >
        <Tab.Screen name="Trang ch???" component={HomeStackScreen} />
        <Tab.Screen name="?????t h??ng" component={OrderStackScreen} />
        <Tab.Screen name="C???a h??ng" component={StoreStackScreen}/>
        <Tab.Screen name="T??ch ??i???m" component={TichdiemStackScreen} />
        <Tab.Screen name="Kh??c" component={OtherStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  
  )
}

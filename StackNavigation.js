
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import FrontSize from './Component/FrontSize';
// import Color from './Component/Color';
import Office from './Office';
import Success from './Component/Success';
import Screen3 from './Component/Screen3';
import Profile from './Component/Profile';
import Detail_Profile from './Component/Detail_Profile';
import Dangnhap from './Component/Dangnhap';
const Stack = createStackNavigator();
const Main_Header = () => {
  return (
   
    <Stack.Navigator initialRouteName="Office">
      <Stack.Screen name="Office" component={Office} />
      <Stack.Screen name="Success" component={Success} options={{title:'Submit Success',
      headerStyle:{
        backgroundColor:'#BD1313'
      },
      headerTinitColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold',
        paddingHorizontal:51,
        color:'#FFFFFF'
      }
    }}/>
      <Stack.Screen name="Screen3" component={Screen3} options={{headerShown:false}}  />

    </Stack.Navigator>
  );
};


const Profile_User = () => {

  return (
    <Stack.Navigator >
      
      <Stack.Screen name="Detail_Profile" component={Detail_Profile} options={{headerLeft:null,title:'Cá Nhân',headerTitleStyle:{
          fontSize:17,
          fontWeight:'bold',
          fontStyle:'normal'
      }}} />
      <Stack.Screen name="Profile" component={Profile} />
       <Stack.Screen name ="Dangnhap" component={Dangnhap}/>
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
 
});


export { Main_Header, Profile_User };

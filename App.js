import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FirstScreen from './FirstScreen' ;
import SecondScreen from './SecondScreen' ;
import { Entypo } from '@expo/vector-icons';


//const Drawer = createDrawerNavigator();

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/*<Drawer.Navigator>
        <Drawer.Screen 
          name="First" 
          component={FirstScreen}         
        />
        <Drawer.Screen 
          name="Second" 
          component={SecondScreen} 
        />
      </Drawer.Navigator>*/}
      <BottomTab.Navigator
        screenOptions={{
          headerStyle:{
            backgroundColor:'gray',
            
          },
          headerTintColor:'white',
        }}
      >
        <BottomTab.Screen 
          name="First" 
          component={FirstScreen}
          options={{
            tabBarIcon: ({color, size}) => (<Entypo name="home" size={24} color="black" />)
          }}
        />
        <BottomTab.Screen 
          name="Second" 
          component={SecondScreen}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

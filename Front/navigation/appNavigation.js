import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import FormScreen from '../screens/FormScreen';
import EventosScreen from '../screens/EventosScreen';
import EventosAdmScreen from '../screens/EventosAdmScreen';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Form') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'Eventos') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'EventosAdm') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'green',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Form" component={FormScreen} />
        <Tab.Screen name="Eventos" component={EventosScreen} />
        <Tab.Screen name="EventosAdm" component={EventosAdmScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;


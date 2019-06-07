import React from 'react'
import { createAppContainer, createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation'
import Videos from '../Screens/Videos'
import Radio from '../Screens/Radio'
import Contact from '../Screens/Contact'
import Auth from '../Screens/Auth'
import Login from '../Screens/Login'
import Icon from 'react-native-vector-icons/Feather'

const VideosStack = createStackNavigator(
  {
    Videos: Videos
  },
  {
    headerMode: 'none',
    mode: 'modal',
  }
)

const RadioStack = createStackNavigator(
  {
    Radio: Radio
  },
  {
    headerMode: 'none',
    mode: 'modal',
  }
)

const ContactStack = createStackNavigator(
  {
    Contact: Contact
  },
  {
    headerMode: 'none',
    mode: 'modal',
  }
)

const BottomTabNavigator = createBottomTabNavigator(
  {
    VideosStack,
    RadioStack,
    ContactStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'VideosStack':
            iconName = 'mic'
            break;
          case 'RadioStack':
            iconName = 'radio'
            break;
          case 'ContactStack':
            iconName = 'mail'
            break;
          case 'CalendarStack':
            iconName = 'calendar'
            break;
          default:
            iconName = ''
            break;
        }
        return <Icon name={iconName} size={40} color={tintColor} />
      },
    }),
    tabBarOptions: {
      style: {
        backgroundColor: '#33424C',
        paddingBottom: 15,
        paddingTop: 15,
        height: 70
      },
      showLabel: false,
      activeTintColor: '#009BD0',
      inactiveTintColor: 'white',
    },
    headerMode: 'none',
    mode: 'modal',
  }
)

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: Auth,
      Home: BottomTabNavigator,
      Login: Login
    }
  )
)
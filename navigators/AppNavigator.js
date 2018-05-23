import { createStackNavigator } from 'react-navigation'

import HomeScreen from '../containers/HomeScreen'
import NewItemScreen from '../containers/NewItemScreen'
import CalendarScreen from '../containers/CalendarScreen'

export default createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: '23. toukokuuta 2018',
      },
    },
    NewItem: {
      screen: NewItemScreen,
      navigationOptions: {
        title: 'Add New Delivery',
      },
    },
    Calendar: {
      screen: CalendarScreen,
      navigationOptions: {
        title: 'Choose date',
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
)

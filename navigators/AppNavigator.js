import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation'

import HomeScreen from '../containers/HomeScreen'
import NewItemScreen from '../containers/NewItemScreen'
import CalendarScreen from '../containers/CalendarScreen'

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: '22. toukokuuta 2018',
    },
  },
})
const NewItemStack = createStackNavigator({
  Home: {
    screen: NewItemScreen,
    navigationOptions: {
      title: 'Add New Delivery',
    },
  },
})
const CalendarStack = createStackNavigator({
  Home: {
    screen: CalendarScreen,
    navigationOptions: {
      title: 'Calendar',
    },
  },
})
export default createBottomTabNavigator({
  Home: HomeStack,
  NewItem: NewItemStack,
  Calendar: CalendarStack,
})

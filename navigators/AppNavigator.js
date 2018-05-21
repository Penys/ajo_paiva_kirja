import { createBottomTabNavigator } from 'react-navigation'

import HomeScreen from '../containers/HomeScreen'
import NewItemScreen from '../containers/NewItemScreen'
import CalendarScreen from '../containers/CalendarScreen'

export default createBottomTabNavigator({
  Home: HomeScreen,
  NewItem: NewItemScreen,
  Calendar: CalendarScreen,
})

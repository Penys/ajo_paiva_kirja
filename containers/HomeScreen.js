import React from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { Icon } from 'react-native-elements'

const HomeScreen = (props) => {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.AddNewDelivery}
        activeOpacity={0.5}
        onPress={() => navigation.navigate('NewItem')}
      >
        <Icon
          raised
          reverse
          name="plus"
          type="entypo"
          color="#FF0078"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Calendar}
        activeOpacity={0.5}
        onPress={() => navigation.navigate('Calendar')}
      >
        <Icon
          raised
          reverse
          name="event"
          color="#1966FC"
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  AddNewDelivery: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  Calendar: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    left: 30,
    bottom: 30,
  },
})
export default HomeScreen

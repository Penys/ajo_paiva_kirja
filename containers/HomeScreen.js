import React from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { Icon } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler'

const HomeScreen = (props) => {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <FlatList
        
      />
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
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    right: 10,
    bottom: 10,
  },
  Calendar: {
    position: 'absolute',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    left: 10,
    bottom: 10,
  },
})
export default HomeScreen

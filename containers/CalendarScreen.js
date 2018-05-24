import React from 'react'
import {
  Text,
  View,
  StyleSheet,
} from 'react-native'

const CalendarScreen = (props) => {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <Text>Calendar</Text>
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
})

export default CalendarScreen

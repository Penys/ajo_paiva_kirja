import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

const CalendarScreen = () => (
  <View style={styles.container}>
    <Text>Calendar</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default CalendarScreen

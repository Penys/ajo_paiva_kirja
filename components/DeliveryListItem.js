import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native'
import { Card } from 'react-native-elements'

import PropTypes from 'prop-types'

const DeliveryListItem = (props) => {
  const {
    pickupAddress, deliveryAddress, packageInfo,
  } = props
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.pickup}>{pickupAddress}</Text>
          <Text style={styles.delivery}>{deliveryAddress}</Text>
        </View>
        <Text style={styles.info}>{packageInfo}</Text>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  card: {
  },
  title: {
    marginBottom: 10,
  },
  pickup: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  delivery: {
    fontSize: 15,
  },
  info: {
    fontSize: 12,
  },
})

DeliveryListItem.defaultProps = {
  pickupAddress: 'pickup',
  deliveryAddress: 'delivery',
  packageInfo: 'info',
}

DeliveryListItem.propTypes = {
  pickupAddress: PropTypes.string,
  deliveryAddress: PropTypes.string,
  packageInfo: PropTypes.string,
}

export default DeliveryListItem

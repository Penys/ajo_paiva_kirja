import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

import PropTypes from 'prop-types'


const DeliveryListItem = (props) => {
  const {
    date, pickupAddress, deliveryAddress, packageInfo,
  } = props
  return (
    <View style={styles.item}>
      <Text>{date}</Text>
      <View style={styles.title}>
        <Text style={styles.pickup}>{pickupAddress}</Text>
        <Text style={styles.delivery}>{deliveryAddress}</Text>
      </View>
      <Text style={styles.info}>{packageInfo}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    borderColor: '#000',
    backgroundColor: '#fff',
    borderRadius: 2,
    borderWidth: 1,
    marginBottom: 20,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
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
  date: 'date',
  pickupAddress: 'pickup',
  deliveryAddress: 'delivery',
  packageInfo: 'info',
}

DeliveryListItem.propTypes = {
  date: PropTypes.string,
  pickupAddress: PropTypes.string,
  deliveryAddress: PropTypes.string,
  packageInfo: PropTypes.string,
}

export default DeliveryListItem

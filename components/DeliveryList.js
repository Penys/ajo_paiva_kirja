import React from 'react'
import PropTypes from 'prop-types'
import {
  FlatList,
  StyleSheet,
  RefreshControl,
} from 'react-native'

import DeliveryListItem from './DeliveryListItem'


const DeliveryList = (props) => {
  const { deliveries, isLoading, onLoad } = props
  return (
    <FlatList
      style={styles.container}
      data={deliveries}
      renderItem={({ item }) => (
        <DeliveryListItem
          date={item.date}
          pickupAddress={item.pickupAddress}
          deliveryAddress={item.deliveryAddress}
          packageInfo={item.packageInfo}
        />
      )}
      keyExtractor={delivery => `${delivery.id}`}
      refreshControl={
        <RefreshControl
          refreshing={isLoading}
          onRefresh={onLoad}
        />
      }
    />
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
})

DeliveryList.defaultProps = {
  deliveries: [{ date: 'date' }],
}

DeliveryList.propTypes = {
  deliveries: PropTypes.arrayOf(PropTypes.shape({})),
  isLoading: PropTypes.bool.isRequired,
  onLoad: PropTypes.func.isRequired,
}

export default DeliveryList

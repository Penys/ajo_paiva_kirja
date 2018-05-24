import React from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { Icon } from 'react-native-elements'

import DeliveryList from '../components/DeliveryList'
import dummyData from '../dummies/dummyData.json'
import colors from '../constants/colors'

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      deliveries: null,
      isLoading: false,
    }
    this.onLoad = this.onLoad.bind(this)
  }
  componentDidMount() {
    this.onLoad()
  }
  onLoad() {
    this.setState({ isLoading: true })
    this.setState({ deliveries: dummyData })
    this.setState({ isLoading: false })
  }
  render() {
    const { navigation } = this.props
    const { deliveries, isLoading } = this.state
    return (
      <View style={styles.container}>
        <DeliveryList
          style={styles.deliveryListItem}
          deliveries={deliveries}
          isLoading={isLoading}
          onLoad={this.onLoad}
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deliveryList: {
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

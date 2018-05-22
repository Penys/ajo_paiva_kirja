import React from 'react'

import DeliveryList from '../components/DeliveryList'
import dummyData from '../dummies/dummyData.json'

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
    const { deliveries, isLoading } = this.state
    return (
      <DeliveryList
        deliveries={deliveries}
        isLoading={isLoading}
        onLoad={this.onLoad}
      />
    )
  }
}

export default HomeScreen

import React from 'react'
import { TextInput, StyleSheet, View, Button, Text } from 'react-native'

export default class NewItemScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pickAddr: 'pick-up address',
      delAddr: 'delivery address',
      infoField: 'Info',
      // payerBtn: 'rahti',
    }
  }

  render() {
    return (

      <View style={styles.allItems}>
        <Text style={styles.headerTitles}>Pick up Address</Text>
        <View style={styles.orderer}>

          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({ pickAddr: text })}
            value={this.state.pickAddr.text}
          />

          <Button
            style={styles.upperButtons}
            title="rahti"
          />

        </View>
        <Text style={styles.headerTitles}>Delivery Address</Text>

        <View style={styles.orderer}>

          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({ delAddr: text })}
            value={this.state.delAddr.text}
          />

          <Button
            style={styles.upperButtons}
            title="rahti"
          />
        </View>
        <Text style={styles.headerTitles}>Info</Text>
        <TextInput
          style={styles.infoText}
          multiline
          numberOfLines={4}
          onChangeText={text => this.setState({ infoField: text })}
          value={this.state.infoField.text}
        />
        <View style={styles.lowerButtons}>
          <Button
            style={styles.buttons}
            title="Rahtikirja"

          />


        </View>
        <Button
          style={styles.buttons}
          title="OK!"
        />

      </View>
    )
  }
}
const styles = StyleSheet.create({

  allItems: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderer: {
    // padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    marginRight: 15,
    flex: 0.8,
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
  },
  infoText: {
    // flex: 1,
    // alignSelf: 'stretch',
    padding: 15,
    width: '80%',
    flexDirection: 'row',
    borderColor: 'gray',
    borderWidth: 1,
  },
  upperButtons: {
    height: 60,
    flex: 0.2,
    color: '#841584',
  },
  lowerButtons: {
    padding: 15,
    height: 60,
  },
  headerTitles: {
    padding: 15,
  },

})

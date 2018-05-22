import React, { Component } from "react";
import { Button } from "react-native";
import { AppRegistry, TextInput, StyleSheet, View } from "react-native";

export default class CreateListing extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "pick-up address" };
    this.state2 = { text: "delivery address" };
    this.state3 = { text: "Info" };
    this.state4 = { text: "rahti" };
  }

  render() {
    return (

      <View style={styles.allItems}>

        <View style={styles.orderer}>

        <TextInput
          style={styles.textInput}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />

        <Button
          title={this.state4.text}
        />

        </View>

        <View style={ styles.orderer }>

        <TextInput
          style={styles.textInput}
          onChangeText={text => this.setState({ text })}
          value={this.state2.text}
        />

        <Button style={styles.buttons}
          title={this.state4.text}
        />
      </View>

        <TextInput
          style={ styles.orderer }
          multiline={true}
          numberOfLines={4}
          onChangeText={text => this.setState({ text })}
          value={this.state3.text}
        />

          <Button
            title="Rahtikirja"

          />

        <Button
          title="OK!"


        />

      </View>
    );
  }
}
const styles = StyleSheet.create({

  allItems: {
    padding: 15,
      flex: 1,
      alignItems: 'center'
  },
  orderer: {

    flexDirection: 'row',
    justifyContent: 'space-between',
},
  textInput: {
    flex: 0.8,
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
    buttons: {
      flex: 0.2,
      color: #841584'
    }
})

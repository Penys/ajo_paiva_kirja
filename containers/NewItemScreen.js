import React, { Component } from "react";
import { Button } from "react-native";
import { AppRegistry, TextInput, StyleSheet, View } from "react-native";

export default class NewItemScreen extends React.Component {
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
          style={styles.upperButtons}
          title={this.state4.text}
        />

        </View>

        <View style={ styles.orderer }>

        <TextInput
          style={styles.textInput}
          onChangeText={text2 => this.setState({ text })}
          value={this.state2.text}
        />

        <Button style={styles.upperButtons}
          title={this.state4.text}
        />
      </View>

        <TextInput
          style={ styles.infoText }
          multiline
          numberOfLines={4}
          onChangeText={text3 => this.setState({ text })}
          value={this.state3.text}
        />
        <View style={styles.lowerButtons}>
          <Button
            style={styles.buttons}
            title="Rahtikirja"

          />

        <Button
          style={styles.buttons}
          title="OK!"
        />
      </View>

      </View>
    );
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
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
},
  textInput: {
    marginRight: 15,
    flex: 0.8,
    height: 60,
    borderColor: "gray",
    borderWidth: 1
},
  infoText: {
    height: 150

  },
    upperButtons: {
      height: 60,
      flex: 0.2,
      color: '#841584'
    },
    lowerButtons: {
      padding: 15,
      height: 60
    }

})

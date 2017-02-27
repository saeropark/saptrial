import React, { Component } from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import ShuttleBusList from './ShuttleBusList';
import ShuttleBusInfo from './ShuttleBusInfo';

export default class HomeView extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text>WELCOME!</Text>
                <TouchableHighlight underlayColor ={'pink'} onPress={this.goShuttleBus.bind(this)}>
                  <Text style = {styles.button}>Shuttle Bus List</Text>
                </TouchableHighlight>
            </View>
        )
    }

    goShuttleBus() {
    console.log("go to Shuttle Bus");
    this.props.navigator.push({ screen: 'ShuttleBusList' });
  }
}

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  button: {
      borderWidth: 1,
      padding: 25,
      backgroundColor: 'yellow',
      borderColor: 'black'
  }
})

 
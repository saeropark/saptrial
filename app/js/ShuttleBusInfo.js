import React, { Component} from 'react';
import {View, Text,  StyleSheet, TouchableHighlight } from 'react-native';

export default class ShuttleBusInfo extends Component {
    
    render() {
        var bus = this.props.bus;
        console.log(bus);
        //var features = (typeof buses.features !== 'undefined') ? buses.features : 'no features';
        return (
            <View style={styles.container}>        
                <Text style={styles.features}>Testing: {bus.features}</Text>
           

            <TouchableHighlight onPress={this.goBack.bind(this)}>
                <Text>Go Back</Text>
            </TouchableHighlight>
             </View>
        );
    }

    goBack() {
    console.log("go to back");
    this.props.navigator.pop({ screen: 'ShuttleBusList' });
  }
}

var styles = StyleSheet.create({
    container: {
        marginTop: 75,
        alignItems: 'center'
    },
    features: {
        padding: 10,
        fontSize: 15,
        color: '#656565'
    }
});

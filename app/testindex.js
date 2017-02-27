import React, { Component } from 'react';
import {AppRegistry, Navigator, StyleSheet} from 'react-native';
import HomeView from './js/HomeView';
import ShuttleBusList from './js/ShuttleBusList';
import ShuttleBusInfo from './js/ShuttleBusInfo';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#FFFFFF',
        boarderCoor: '#FFFFFF'
    }
});

export default class SAPtrial extends Component {
    render() {
        return (
            <Navigator
                initialRoute = {{ screen: 'HomeView'}}
                renderScene = {(route, nav)=> {return this.renderScene(route, nav)}} />
        );
    }

    //need to call inside here if u wanna pass between pages
  renderScene(route,nav) {
    switch (route.screen) {
      case "HomeView":
        return <HomeView navigator={nav} />

      case "ShuttleBusInfo":
        return <ShuttleBusInfo navigator={nav} />

      case "ShuttleBusList":
        return <ShuttleBusList navigator={nav} />
    }
  }
}

AppRegistry.registerComponent('SAPtrial', () => SAPtrial);
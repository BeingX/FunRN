'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Text,
} from 'react-native';

type Props = {};
export default class Detail extends Component<Props> {
    static navigationOptions = {
        title: 'Detail',
      };
  render() {
    const { params } = this.props.navigation.state;
    console.log(params)
    const item = params.item;
    return (
        <View style={styles.container}>
          <Image source={{uri: item.img_url}} style={styles.thumb} />
          <Text style={styles.description}>
            {item.price_formatted}
          </Text>
          <Text style={styles.description}>
            {item.title}
          </Text>
          <Text style={styles.description}>
            {item.summary}
          </Text>
        </View>
      
    )
  }
}

const styles = StyleSheet.create({
  thumb: {
    width: 200,
    height: 200,
    marginRight: 10
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  }
})
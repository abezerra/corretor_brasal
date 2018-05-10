import React, {Component} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {Actions} from "react-native-router-flux/index";
import css from "../../Styles/generator.styles";

export default class AvaliableMedias extends Component {
  constructor(props) {
    super(props)
    console.log('props no avalibableMedias', props)
  }
  
  render() {
    return (
        <TouchableOpacity
          onPress={() => Actions.creator(this.props.item.media_name)}>
          <Image source={{uri: this.props.item.media_url}} style={css.generatedImage}/>
        </TouchableOpacity>
    )
  }
}
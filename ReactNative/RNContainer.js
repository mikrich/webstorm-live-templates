#set($componentName = "")
#foreach($str in $Component.split("-"))
  #set($str = $str.substring(0,1).toUpperCase()+$str.substring(1))
  #set($componentName = $componentName + $str)
#end
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import { connect } from 'react-redux';

const StateProps = (state, ownProps) => {
  return {
    ...ownProps
  };
};

const DispatchingProps = (dispatch, ownProps) => {
  return {};
};

class ${componentName} extends Component {
  render () {
    return (
      <View testID="${Component}">
        <Text>Hi#[[$END$]]#</Text>
      </View>
    );
  }
}

${componentName}.propTypes = {};

const styles = StyleSheet.create({});

export default connect(StateProps, DispatchingProps)(${componentName});

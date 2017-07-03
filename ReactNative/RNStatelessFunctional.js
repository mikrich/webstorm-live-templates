#set($componentName = "")
#foreach($str in $Component.split("-"))
  #set($str = $str.substring(0,1).toUpperCase()+$str.substring(1))
  #set($componentName = $componentName + $str)
#end
import React from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const ${componentName} = props => {
  return (
    <View testID="${Component}">
      <Text>Hi#[[$END$]]#</Text>
    </View>
  );
};

${componentName}.propTypes = {};

const styles = StyleSheet.create({});

export default ${componentName};

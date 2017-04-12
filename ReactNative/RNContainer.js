import React, { Component } from 'react'

import {
  Text,
  StyleSheet
} from 'react-native'

import { connect } from 'react-redux'

const StateProps = (state, ownProps) => {
  return {
    ...ownProps
  }
}

const DispatchingProps = (dispatch, ownProps) => {
  return {}
}

class #[[$Title$]]# extends Component {
  render () {
    return (
      <Text>Hi I'm a Container component</Text>
    )
  }
}

#[[$Title$]]#.propTypes = {}

const styles = StyleSheet.create({})

export default connect(StateProps, DispatchingProps)(#[[$Title$]]#)

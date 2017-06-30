import React from 'react'
import mockStore from 'redux-mock-store'

import { shallow } from 'enzyme'
import #[[$Title$]]# from './#[[$Title$]]#'

describe('#[[$Title$]]#', () => {
  const initialState = {}
  const wrapper = shallow(
    <#[[$Title$]]# />,
    { context: { store: mockStore(initialState) } }
  )

  it('should render #[[$Title$]]# correctly', () => {
    expect(wrapper.dive().find('#[[$Title$]]#').dive()).toMatchSnapshot()
  })
})

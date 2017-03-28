import React from 'react'
import #[[$Title$]]# from '../#[[$Title$]]#'

import renderer from 'react-test-renderer'

it('should render #[[$Title$]]# correctly', () => {
  const tree = renderer.create(
    <#[[$Title$]]# />
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

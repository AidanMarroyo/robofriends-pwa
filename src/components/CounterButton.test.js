import { shallow } from 'enzyme'
import React from 'react'
import CounterButton from './CounterButton'

it('expect to render CounterButton component', () => {
  const mockColor = 'red'
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot()
})

it('expect to increment the counter button', () => {
  const mockColor = 'red'
  const wrapper = shallow(<CounterButton color={mockColor} />)

  wrapper.find('[id="counter"]').simulate('click')
  wrapper.find('[id="counter"]').simulate('click')
  expect(wrapper.state()).toEqual({ count: 2 })
  expect(wrapper.props().color).toEqual('red')
})

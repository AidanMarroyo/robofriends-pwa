import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';


it('expect to render Cardlist component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Boy',
            username: 'JohnJohn',
            email: 'john@gmail.com'
        }
    ]
    expect(shallow(<CardList robots ={mockRobots} />)).toMatchSnapshot();
})
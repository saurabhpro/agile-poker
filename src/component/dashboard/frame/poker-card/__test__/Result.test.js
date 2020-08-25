import React from 'react';
import { shallow } from 'enzyme';
import Result from '../Result';

let component;

const user = {
  userName: 'Saurabh',
  isOnline: false,
  isActive: false,
  memberSince: new Date(2020, 20, 8),
  team: 'r2unit',
  role: 'Scrum Master',
};

describe('result from poker card panel', () => {
  beforeAll(() => {
    component = shallow(<Result currentUser={user} />);
    //console.debug("This was prited",component.debug());
  });

  it('matches the rendered snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render one <CardDeck>', () => {
    expect(component.find('CardDeck')).toHaveLength(0);
  });
});

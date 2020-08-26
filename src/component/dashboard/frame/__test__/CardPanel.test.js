import React from 'react';
import { shallow } from 'enzyme';
import CardPanel from '../CardPanel';

const user = {
  userName: 'Saurabh',
  isOnline: false,
  isActive: false,
  memberSince: new Date(2020, 20, 8),
  team: 'r2unit',
  role: 'Scrum Master',
};

let component;

describe('center card panel', () => {
  beforeAll(() => {
    component = shallow(<CardPanel currentUser={user} />);
    console.debug("This was prited",component.debug());
  });

  it('matches the rendered snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render one <AllCardsPanel>', () => {
    expect(component.find('AllCardsPanel')).toHaveLength(1);
  });
});

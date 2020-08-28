import React from 'react';
import { shallow } from 'enzyme';
import AllCardsPanel from '../AllCardsPanel';

let component;

const user = {
  userName: 'Saurabh',
  isOnline: false,
  isActive: false,
  memberSince: new Date(2020, 20, 8),
  team: 'r2unit',
  role: 'Scrum Master',
};

describe('cards with story points panel', () => {
  beforeAll(() => {
    component = shallow(<AllCardsPanel currentUser={user} />);
    //console.debug("This was prited",component.debug());
  });

  it('matches the rendered snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render one <CardDeck>', () => {
    expect(component.find('CardDeck')).toHaveLength(1);
  });
});

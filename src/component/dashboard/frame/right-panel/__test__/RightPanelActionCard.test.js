import React from 'react';
import { shallow } from 'enzyme';
import RightPanelActionCard from '../RightPanelActionCard';

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
    component = shallow(
      <RightPanelActionCard
        currentUser={user}
        style={{ border: 'none' }}
      />,
    );
    //console.debug("This was prited",component.debug());
  });

  it('matches the rendered snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render one <Card>', () => {
    expect(component.find('Card')).toHaveLength(1);
  });
});

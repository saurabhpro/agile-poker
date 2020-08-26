import React from 'react';
import { shallow } from 'enzyme';
import RightSidePanel from '../RightSidePanel';

const user = {
  userName: 'Saurabh',
  isOnline: false,
  isActive: false,
  memberSince: new Date(2020, 20, 8),
  team: 'r2unit',
  role: 'Scrum Master',
};

let component;

describe('sign in page', () => {
  beforeAll(() => {
    component = shallow(<RightSidePanel currentUser={user} />);
    console.debug(component.debug());
  });

  it('matches the rendered snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render one <RightPannelActionCard>', () => {
    expect(component.find('RightPannelActionCard')).toHaveLength(0);
  });

  it('should render one <RightPannelTeamStatusCard>', () => {
    expect(component.find('RightPannelTeamStatusCard')).toHaveLength(
      0,
    );
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import RightSidePanel from '../RightSidePanel';

let component;

describe('sign in page', () => {
  beforeAll(() => {
    component = shallow(<RightSidePanel userName="Saurabh" />);
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

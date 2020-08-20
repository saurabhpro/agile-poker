import React from 'react';
import { shallow } from 'enzyme';
import RightPanelTeamStatusCard from '../RightPanelTeamStatusCard';

let component;

describe('result from poker card panel', () => {
  beforeAll(() => {
    component = shallow(
      <RightPanelTeamStatusCard style={{ border: 'none' }} />,
    );
    //console.debug("This was prited",component.debug());
  });

  it('matches the rendered snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render one <Team>', () => {
    expect(component.find('Team')).toHaveLength(1);
  });
});

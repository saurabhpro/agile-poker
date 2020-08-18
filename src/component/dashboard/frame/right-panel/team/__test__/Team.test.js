import React from 'react';
import { shallow } from 'enzyme';
import Team from '../Team';

let component;

describe('result from poker card panel', () => {
  beforeAll(() => {
    component = shallow(<Team className="rightCard" />);
    //console.debug("This was prited",component.debug());
  });

  it('matches the rendered snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render one <TeamMember>', () => {
    expect(component.find('TeamMember')).toHaveLength(0);
  });
});

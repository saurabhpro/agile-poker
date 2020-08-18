import React from 'react';
import { shallow } from 'enzyme';
import TeamMember from '../TeamMember';

let component;

describe('result from poker card panel', () => {
  beforeAll(() => {
    component = shallow(<TeamMember team="Avengers" />);
    //console.debug("This was prited",component.debug());
  });

  it('matches the rendered snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render one <TeamMemberDetail>', () => {
    expect(component.find('TeamMemberDetail')).toHaveLength(0);
  });
});

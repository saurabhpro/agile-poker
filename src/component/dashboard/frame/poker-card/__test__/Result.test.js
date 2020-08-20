import React from 'react';
import { shallow } from 'enzyme';
import Result from '../Result';

let component;

describe('result from poker card panel', () => {
  beforeAll(() => {
    component = shallow(<Result />);
    //console.debug("This was prited",component.debug());
  });

  it('matches the rendered snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render one <CardDeck>', () => {
    expect(component.find('CardDeck')).toHaveLength(0);
  });
});

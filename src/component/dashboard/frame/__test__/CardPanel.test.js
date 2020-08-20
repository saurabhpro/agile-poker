import React from 'react';
import { shallow } from 'enzyme';
import CardPanel from '../CardPanel';

let component;

describe('center card panel', () => {
  beforeAll(() => {
    component = shallow(<CardPanel />);
    //console.debug("This was prited",component.debug());
  });

  it('matches the rendered snapshot', () => {
    expect(component).toMatchSnapshot();
  });


  it('should render one <AllCardsPanel>', () => {
    expect(component.find('AllCardsPanel')).toHaveLength(1);
  });
});

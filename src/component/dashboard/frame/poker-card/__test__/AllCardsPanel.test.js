import React from 'react';
import { shallow } from 'enzyme';
import AllCardsPanel from '../AllCardsPanel';

let component;

describe('cards with story points panel', () => {
  beforeAll(() => {
    component = shallow(<AllCardsPanel />);
    //console.debug("This was prited",component.debug());
  });

  it('matches the rendered snapshot', () => {
    expect(component).toMatchSnapshot();
  });


  it('should render one <CardDeck>', () => {
    expect(component.find('CardDeck')).toHaveLength(1);
  });
});

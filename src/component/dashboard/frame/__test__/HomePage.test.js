import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../HomePage';

let component;

describe('main center page after successful login', () => {
  beforeAll(() => {
    component = shallow(<HomePage userName={'Saurabh'} />);
    console.debug(component.debug());
  });

  it('matches the rendered snapshot', ()
   => {
    expect(component).toMatchSnapshot();
  });

  it('should render one <CardPanel>', () => {
    expect(component.find('CardPanel')).toHaveLength(0);
  });

  it('should render one <RightSidePanel>', () => {
    expect(component.find('RightSidePanel')).toHaveLength(0);
  });
});

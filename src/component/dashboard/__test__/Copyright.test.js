import React from 'react';
import { shallow, mount } from 'enzyme';
import Copyright from '../Copyright';

let component;

describe('copyright message', () => {
  beforeAll(() => {
    component = shallow(<Copyright />);
    //console.debug(component.debug());
  });

  it('matches the rendered snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should display name and current year', () => {
    expect(component.text()).toContain('Saurabh');
    expect(component.text()).toContain(new Date().getFullYear());
  });

  it('mounts', () => {
    component = mount(<Copyright />);

    //console.debug(component.debug());
    component.unmount();
  });
});

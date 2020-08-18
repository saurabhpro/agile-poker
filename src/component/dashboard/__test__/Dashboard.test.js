import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../Dashboard';
import {
  addUserNameToSessionStore,
  sessionStoreClearUserName,
} from '../../utils/sessionStore';

let component;

describe(' dashboard without authentication', () => {
  beforeAll(() => {
    component = shallow(<Dashboard />);
    console.debug(component.debug());
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render one <SignIn>', () => {
    expect(component.find('SignIn')).toHaveLength(1);
  });
});

describe(' dashboard with authentication', () => {
  beforeAll(() => {
    addUserNameToSessionStore('Saurabh');
    component = shallow(<Dashboard />);
    //console.debug(component.debug());
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render one <HomePage>', () => {
    expect(component.find('HomePage')).toHaveLength(1);
  });

  it('should render HomePage with current user', () => {
    expect(component.find('Saurabh')).toBeTruthy();
  });

  afterAll(() => {
    sessionStoreClearUserName();
  });
});

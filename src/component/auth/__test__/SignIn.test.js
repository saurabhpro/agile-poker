import React from 'react';
import { mount } from 'enzyme';

import SignIn, { updateUserToOnline } from '../SignIn';


test('should render properly', () => {
  const component = mount(<SignIn />);

  expect(component).toMatchSnapshot();

  component.unmount();
});

describe('sign in a user', () => {
  const user = {
    userName: 'Saurabh',
    isOnline: false,
    isActive: false,
    memberSince: new Date(2020, 20, 8),
    team: 'r2unit',
    role: 'Scrum Master',
  };

  it('it should make user online ', () => {
    //given
    const expected = { ...user, isOnline: true, isActive: true };

    //when
    const actual = updateUserToOnline(user);

    //then
    expect(actual).toStrictEqual(expected);
  });

  it('it should make user active ', () => {
    // given
    expect(user).toStrictEqual({
      ...user,
      isOnline: false,
      isActive: false,
    });

    const expected = { ...user, isOnline: true, isActive: true };

    // when
    const actual = updateUserToOnline(user);

    //then
    expect(actual).toStrictEqual(expected);
  });
});

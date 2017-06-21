import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import Component from '../src/';

test('should render `Hello World` as title', t => {
  const component = shallow(<Component />);

  t.is(component.type(), 'h1');
  t.is(component.text(), 'Hello World');
});

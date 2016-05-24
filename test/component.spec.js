import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import Component from '../src/';

test('Component\'s title should Hello World', t => {
  const component = shallow(<Component />);

  t.is(component.type(), 'h1');
  t.is(component.text(), 'Hello World');
});

/* global describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { assert, expect } from 'chai';
import Icon from '../src/Icon';

let wrapper = shallow(
  <Icon>cloud</Icon>
);

describe('<Icon />', () => {
  it('renders an icon', () => {
    assert(wrapper.find('i.material-icons').length, 'renders icon');
  });

  it('accepts size as a prop', () => {
    wrapper = shallow(<Icon large>cloud</Icon>);
    assert(wrapper.find('i.material-icons.large').length, 'icon large');
  });

  it('passes the provided properties in', () => {
    wrapper = shallow(<Icon attribute="value">cloud</Icon>);
    expect(wrapper.equals(<i className="material-icons" attribute="value">cloud</i>)).to.equal(true);
  });
});

jest.unmock('../../../lib/components/PrimaryButton.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {shallow} from 'enzyme';

import PrimaryButton from '../../../lib/components/PrimaryButton.jsx';

describe('PrimaryButton', () => {

  let buttonItem = null;

  const text = 'Test Label';

  beforeEach(function() {
    buttonItem = shallow(<PrimaryButton text={text} />);
  });

  it('is defined', () => {
    expect(buttonItem).toBeDefined();
  });

  it('is a button element', () => {
    expect(buttonItem.type()).toEqual('button');
  });

  it('is has specified text', () => {
    expect(buttonItem.text()).toEqual(text);
  });

  it('is has a active class', () => {
    buttonItem = shallow(<PrimaryButton text={text} status={PrimaryButton.STATUS_ACTIVE} />);
    expect(buttonItem.hasClass('usa-button-active'));
  });

  it('is has a hover class', () => {
    buttonItem = shallow(<PrimaryButton text={text} status={PrimaryButton.STATUS_HOVER} />);
    expect(buttonItem.hasClass('usa-button-hover'));
  });

  it('is has a disabled status', () => {
    buttonItem = shallow(<PrimaryButton text={text} status={PrimaryButton.STATUS_DISABLED} />);
    expect(buttonItem.hasClass('usa-button-disabled'));
    expect(buttonItem.prop('disabled')).toBeDefined();
  });
  it('is has a big class', () => {
    buttonItem = shallow(<PrimaryButton text={text} size={PrimaryButton.SIZE_BIG} />);
    expect(buttonItem.hasClass('usa-button-big'));
  });
});

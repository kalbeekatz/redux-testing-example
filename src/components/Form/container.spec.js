import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {render as rtlRender, screen, fireEvent} from '@testing-library/react';
import {Form} from '.';
import {rootReducer} from '../../withReduxFeatures';
import {initialState} from '../../redux/form';

const render = () => {
  const store = createStore(rootReducer, {form: initialState});
  const Wrapper = ({children}) => <Provider store={store}>{children}</Provider>;
  return rtlRender(<Form />, {wrapper: Wrapper});
};

describe('components > Form', () => {
  describe('changing name input', () => {
    beforeEach(() => {
      render();
      fireEvent.change(screen.getByLabelText('name:'), {
        target: {value: 'foo'},
      });
    });
    it('reflect value to name input', () => {
      expect(screen.getByLabelText('name:')).toHaveValue('foo');
    });
    it('not reflect value to email input', () => {
      expect(screen.getByLabelText('email:')).toHaveValue('');
    });
  });
  describe('changing email input', () => {
    beforeEach(() => {
      render();
      fireEvent.change(screen.getByLabelText('email:'), {
        target: {value: 'foo'},
      });
    });
    it('reflect value to email input', () => {
      expect(screen.getByLabelText('email:')).toHaveValue('foo');
    });
    it('not reflect value to email input', () => {
      expect(screen.getByLabelText('name:')).toHaveValue('');
    });
  });
});

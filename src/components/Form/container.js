/* eslint-disable react/prop-types */
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Presentation from './presentation';
import {changeName, changeEmail} from '../../redux/form';

const Container = () => {
  const dispatch = useDispatch();
  const onChangeName = e => {
    dispatch(changeName(e.target.value));
  };
  const onChangeEmail = e => {
    dispatch(changeEmail(e.target.value));
  };
  const value = useSelector(state => state.form.value);

  return (
    <Presentation
      onChangeName={onChangeName}
      onChangeEmail={onChangeEmail}
      value={value}
    />
  );
};

export default Container;

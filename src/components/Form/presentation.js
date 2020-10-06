/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';

const Presentation = ({onChangeName, onChangeEmail, value}) => (
  <form>
    <label>
      name: <input onChange={onChangeName} value={value.name} />
    </label>
    <label>
      email: <input onChange={onChangeEmail} value={value.email} />
    </label>
    <button type="submit">submit</button>
  </form>
);

export default Presentation;

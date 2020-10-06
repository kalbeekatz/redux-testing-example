const CHANGE_NAME = 'CHANGE_NAME';
const CHANGE_EMAIL = 'CHANGE_EMAIL';

export function changeName(value) {
  return {type: CHANGE_NAME, value};
}
export function changeEmail(value) {
  return {type: CHANGE_EMAIL, value};
}

export const initialState = {
  value: {
    name: '',
    email: '',
  },
};

export function FormReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        value: {
          ...state.value,
          name: action.value,
        },
      };
    case CHANGE_EMAIL:
      return {
        ...state,
        value: {
          ...state.value,
          email: action.value,
        },
      };

    default:
      return state;
  }
}

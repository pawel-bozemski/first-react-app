/* eslint-disable linebreak-style */
import shortid from 'shortid';

// action name creator
const reducerName = 'list';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_LIST = createActionName('ADD_LIST');

// action creators
export const createActionAddList = payload => ({ payload, type: ADD_LIST });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_LIST:
      return [...state, { ...action.payload, id: shortid.generate() }];
    default:
      return state;
  }
}
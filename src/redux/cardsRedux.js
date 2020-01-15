/* eslint-disable linebreak-style */
import shortid from 'shortid';

// selectors
export const getCardsForColumn = ({cards}, columnId ) => cards.filter(card => card.columnId == columnId);
export const filterCardForSearch = ({cards}, searchString) => cards.filter(card => new RegExp(searchString, 'i').test(card.title));

// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARD = createActionName('ADD_CARD');
export const REMOVE_CARD = createActionName('REMOVE_CARD');

// action creators
export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD });
export const createActionRemoveCard = payload => ({ payload, type: REMOVE_CARD });


// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, { ...action.payload, id: shortid.generate() }];
    case REMOVE_CARD:
      return state.filter((card) => card.id !== action.payload.id);
    default:
      return state;
  }
}
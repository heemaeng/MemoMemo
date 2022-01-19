import React, {useReducer, createContext, useContext, useRef} from 'react';

const initialCheck = [];

const checkReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.list);
    case 'TOGGLE':
      return state.map(list =>
        list.id === action.id ? {...list, checkValue: !list.checkValue} : list,
      );
    case 'REMOVE':
      return state.filter(list => list.id !== action.id);
    case 'REMOVE_ALL':
      state.splice(0, state.length);
      return state;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const CheckStateContext = createContext();
const CheckDispatchContext = createContext();
const CheckNextIdContext = createContext();

export const CheckProvider = ({children}) => {
  const [state, dispatch] = useReducer(checkReducer, initialCheck);
  // useRef 사용법
  // https://velog.io/@mnz/React-useRef-%EA%B0%9C%EB%85%90%EB%B6%80%ED%84%B0-%ED%99%9C%EC%9A%A9%EA%B9%8C%EC%A7%80
  const nextId = useRef(0);

  return (
    <CheckStateContext.Provider value={state}>
      <CheckDispatchContext.Provider value={dispatch}>
        <CheckNextIdContext.Provider value={nextId}>
          {children}
        </CheckNextIdContext.Provider>
      </CheckDispatchContext.Provider>
    </CheckStateContext.Provider>
  );
};

export const useCheckState = () => {
  const context = useContext(CheckStateContext);
  if (!context) {
    throw new Error('Cannot find CheckProvider1');
  }
  return context;
};

export const useCheckDispatch = () => {
  const context = useContext(CheckDispatchContext);
  if (!context) {
    throw new Error('Cannot find CheckProvider2');
  }
  return context;
};

export const useCheckNextId = () => {
  const context = useContext(CheckNextIdContext);
  if (!context) {
    throw new Error('Cannot find CheckProvider3');
  }
  return context;
};

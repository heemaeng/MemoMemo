import React, {useReducer, createContext, useContext, useRef} from 'react';

const initialCheck = [
  {
    id: 1,
    title: '토마토',
    count: '1개',
    check: true,
  },
  {
    id: 2,
    title: '사과',
    count: '2개',
    check: true,
  },
  {
    id: 3,
    title: '포도',
    count: '2송이',
    check: false,
  },
];

const checkReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.list);
    case 'TOGGLE':
      return state.map(list =>
        list.id === action.id ? {...list, done: !list.done} : list,
      );
    case 'REMOVE':
      return state.filter(list => list.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const CheckStateContext = createContext();
const CheckDispatchContext = createContext();
const CheckNextIdContext = createContext();

export const CheckProvider = ({children}) => {
  const [state, dispatch] = useReducer(checkReducer, initialCheck);
  const nextId = useRef(4);

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
    throw new Error('Cannot find CheckProvider');
  }
  return context;
};

export const useCheckDispatch = () => {
  const context = useContext(CheckDispatchContext);
  if (!context) {
    throw new Error('Cannot find CheckProvider');
  }
  return context;
};

export const useCheckNextId = () => {
  const context = useContext(CheckNextIdContext);
  if (!context) {
    throw new Error('Cannot find CheckProvider');
  }
  return context;
};

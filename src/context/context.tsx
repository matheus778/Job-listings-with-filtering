import React, { createContext, useState } from 'react';

type PropsState  = {
  name: string[],
}

type PropsContext = {
  state: PropsState;
  setState: React.Dispatch<React.SetStateAction<PropsState>>
}

const DEFAULT_VALUE = {
  state: {
    name: Array(0),
  },
  setState: () => {}
}

export const FilterContext = createContext<PropsContext>(DEFAULT_VALUE);

type PropsFilterContextProvider = {
  children: JSX.Element
}

export function FilterContextProvider ({children}: PropsFilterContextProvider) {
  const [state, setState] = useState(DEFAULT_VALUE.state)
  return (
    <FilterContext.Provider
      value={{state, setState}} >
      {children}
    </FilterContext.Provider>
  )
}


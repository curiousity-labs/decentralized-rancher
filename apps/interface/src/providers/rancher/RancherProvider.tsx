import { useMemo, useReducer } from 'react'
import { RancherActions, RancherActionTypes } from './actions'
import { useLoadAccountNFTs } from './hooks/useLoadAccountNFTs'
import { RancherContext } from './hooks/useRancher'
import type { RancherStore } from './types'

const initialState: RancherStore = {
  nfts: [],
}

const reducer = (state: RancherStore, action: RancherActionTypes) => {
  switch (action.type) {
    case RancherActions.UPDATE_NFT: {
      return { ...state, nfts: action.payload }
    }
    case RancherActions.RESET: {
      return { ...initialState }
    }
  }
}
const RancherProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  useLoadAccountNFTs(dispatch)
  const value = useMemo(
    () => ({
      state: state,
    }),
    [state],
  )
  return <RancherContext.Provider value={value}>{children}</RancherContext.Provider>
}

export default RancherProvider

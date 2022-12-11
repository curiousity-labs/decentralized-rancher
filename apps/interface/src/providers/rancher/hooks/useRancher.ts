import { RancherStore } from './../types/index'
import { createContext, useContext, Context } from 'react'

export interface IRancherContext {
  state: RancherStore
}

export const RancherContext = createContext<IRancherContext | null>(null)

export const useRancher = (): IRancherContext =>
  useContext(RancherContext as Context<IRancherContext>)

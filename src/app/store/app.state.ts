import { createAction, createReducer, on } from "@ngrx/store";

export interface IAppState{
  counter: number;
}

export const AppInitialState: IAppState = {
  counter: 3
}

export const incrementaContador = createAction('[App] Aumenta contador');
export const decrementaContador = createAction('[App] Reduz contador');

export const appReducer = createReducer(
  AppInitialState,
  on(incrementaContador, (state) => {
    state = {
      ...state,
      counter: state.counter + 1
    }
    return state;
  }),
  on(decrementaContador, (state) => {
    state = {
      ...state,
      counter: state.counter - 1
    }
    return state;
  })
)

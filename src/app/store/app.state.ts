import { createAction, createReducer, on, props } from "@ngrx/store";

export interface IAppState{
  counter: number;
}

export const AppInitialState: IAppState = {
  counter: 3
}

export const incrementaContador = createAction('[App] Aumenta contador');
export const decrementaContador = createAction('[App] Reduz contador');
export const defineContador = createAction('[App] Define contador',
props<{ payload: number }>());

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
  }),
  on(defineContador, (state, action) => {
    state = {
      ...state,
      counter: action.payload
    }
    return state;
  })
)

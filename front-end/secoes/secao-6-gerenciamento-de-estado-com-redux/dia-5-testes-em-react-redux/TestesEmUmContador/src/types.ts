
 export  type ActionType = {
  type: string,
  payload: number
}

export type RootState = {
  counterReducer: {
    counter : number
  }
}
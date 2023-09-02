import { ThunkDispatch } from "redux-thunk"
import { AnyAction } from "redux"


export type CharType = {
  name: string,
  titles: string[],
  aliases: string[],
}

export type CharState = {
  isFetching: boolean,
  character: CharType | null,
  error: string | null,
}

export type Dispatch = ThunkDispatch<CharState, null, AnyAction>
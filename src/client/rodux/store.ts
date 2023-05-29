import { Store, combineReducers } from "@rbxts/rodux";
import { PersistentDataActions, PersistentDataState, persistentDataReducer } from "./reducers/persistentData";

export interface CombinedState {
	persistentData: PersistentDataState;
}

export type CombinedActions = PersistentDataActions;

const combinedReducers = combineReducers<CombinedState, CombinedActions>({
	persistentData: persistentDataReducer,
});

export const clientStore = new Store(combinedReducers);

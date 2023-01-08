 
import { ActionReducerMap } from "@ngrx/store";
import { itemsReducer } from './reducers/items.reducer';
import { ItemsState } from '../core/models/item.state';

 
export interface AppState {
    items: ItemsState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    items: itemsReducer
}
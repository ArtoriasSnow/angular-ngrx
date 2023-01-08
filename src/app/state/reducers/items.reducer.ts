import { ItemModel } from '@core/models/Item.interface';
import { ItemsState } from '@core/models/item.state';
import { createReducer, on } from '@ngrx/store';
import { loadItems, loadedItems, addItem } from '../actions/items.action';

export const initialState: ItemsState = { loading: false, items: [] }
export const itemsReducer = createReducer(
    initialState,
    on(addItem, (state, {item}) => {
        return {...state, items: [item, ...state.items]}
    }),
    on(loadItems, (state) => { 
        return { ...state, loading: true }
    }),
    on(loadedItems, (state, { items }) => {  
        return { ...state, loading: false, items }
    })
);
 
 
import { createAction, props } from '@ngrx/store';
import { ItemModel } from '@core/models/Item.interface';
 

export const addItem = createAction(
    `[Item List] Add Item`,
    props<{item: ItemModel}>()
);

export const loadItems = createAction(
    '[Item List] Load items' //TODO type*
);

export const loadedItems = createAction(
    '[Item List] Loaded success',
    props<{ items: ItemModel[] }>()
)

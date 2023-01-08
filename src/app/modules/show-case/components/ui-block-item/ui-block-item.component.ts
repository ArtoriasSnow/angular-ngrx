
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'; 
import { Store } from '@ngrx/store';  
import { selectListItems } from 'src/app/state/selectors/items.selector';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-ui-block-item',
  templateUrl: './ui-block-item.component.html',
  styleUrls: ['./ui-block-item.component.css']
})
export class UiBlockItemComponent implements OnInit {
 
  items$: Observable<any> = new Observable();

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
   this.items$ = this.store.select(selectListItems)
  }


}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ItemModel } from '@core/models/Item.interface';
import { ShowCaseService } from '@modules/show-case/services/show-case.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadItems } from '../../../../state/actions/items.action';
import { selectLoading } from 'src/app/state/selectors/items.selector';

@Component({
  selector: 'app-show-case-page',
  templateUrl: './show-case-page.component.html',
  styleUrls: ['./show-case-page.component.css'],
})
export class ShowCasePageComponent implements OnInit {

  loading$: Observable<boolean> = new Observable()

  constructor(private store: Store<any>,) {
  }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading)//TODO: true, false

    this.store.dispatch(loadItems()) //TODO🔴


  }
 

}

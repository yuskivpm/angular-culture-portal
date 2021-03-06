import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';

import { LOAD_AUTHORS } from '../const';
import { AuthorsService } from '../../services/authors.service';
import { changeAuthors } from '../actions';

@Injectable({
  providedIn: 'root',
})
export class AppLoadAuthorsEffect {
  constructor(private actions$: Actions, private authorsService: AuthorsService) { }

  @Effect()
  public getAuthors$ = this.actions$.pipe(
    ofType(LOAD_AUTHORS),
    switchMap(() => this.authorsService.loadAuthors()),
    map(authors => changeAuthors({ authors }))
  );
}

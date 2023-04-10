import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, map } from 'rxjs/operators';
import { loadSubjects, subjectsLoaded } from './subjects-state.actions';
import { SubjectsService } from '../services/subjects.service';
import { Subject } from 'src/app/shared/models/subject';

@Injectable()
export class SubjectsStateEffects {


  getSubjects$ = createEffect(() => {
    return this.actions$.pipe( 
        ofType(loadSubjects),
        concatMap(() => {
            return this.subjects.getSubjects().pipe(
                map((s : Subject[]) => subjectsLoaded({ subject: s }))
                
            )
        })
    )
});

  constructor(
    private actions$: Actions,
    private subjects: SubjectsService
    ) {}
}

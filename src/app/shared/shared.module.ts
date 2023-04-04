import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooleanToTextPipe } from './pipes/boolean-to-text.pipe';
import { CompleteNamePipe } from './pipes/complete-name.pipe';
import { FixedArrayPipe } from './pipes/fixed-array.pipe';
import { StudentsFilterPipe } from './pipes/students-filter.pipe';
import { TeachersFilterPipe } from './pipes/teachers-filter.pipe';
import { BooleanStyledDirective } from './directives/boolean-styled.directive';
import { TitlesStyledDirective } from './directives/titles-styled.directive';



@NgModule({
  declarations: [
    BooleanToTextPipe,
    CompleteNamePipe,
    FixedArrayPipe,
    StudentsFilterPipe,
    TeachersFilterPipe,
    BooleanStyledDirective,
    TitlesStyledDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BooleanToTextPipe,
    CompleteNamePipe,
    FixedArrayPipe,
    StudentsFilterPipe,
    TeachersFilterPipe,
    BooleanStyledDirective,
    TitlesStyledDirective
  ]
})
export class SharedModule { }

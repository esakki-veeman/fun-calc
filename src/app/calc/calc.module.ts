import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { AnswerService } from './answer.service';



@NgModule({
  declarations: [ViewComponent],
  providers: [AnswerService],
  imports: [
    CommonModule
  ],
  exports:[ViewComponent]
})
export class CalcModule { }

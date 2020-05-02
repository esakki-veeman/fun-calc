import { Component, OnInit } from '@angular/core';
import { AnswerService } from '../answer.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public displayContent: string;
  public answer: string;
  public operationalContent: string;
  constructor(
    private answerServ: AnswerService
  ) { }

  ngOnInit(): void {
  }

  input(par: string) {
    if(this.answerServ.opFilters.includes(par) ) {
      if(!this.answerServ.opFilters.includes(
        this.displayContent.substring(
          this.displayContent.length - 1, this.displayContent.length
        ))){
      this.operationalContent += ','+par+','
      this.displayContent += par;
        }else{
          return true;
        }
    }else{
      (this.displayContent)?  this.displayContent += par : this.displayContent = par;
      (this.operationalContent)?  this.operationalContent += par : this.operationalContent = par;
    }

  }

  ouput(){
    this.answerServ.output(this.operationalContent);
    this.answer = this.answerServ.answer;
  }


}

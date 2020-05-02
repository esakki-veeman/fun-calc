import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  public opFilters: string[] = ['+','-','*','/','%'];
  public answer;
  constructor() { }

  output(par): string{
    let parsedInput: string[] = par.split(',')
    this.answer = parsedInput[0]
    parsedInput.forEach((value, idx) => {
      if(this.opFilters.includes(value)){
        switch(value){
          case '+':
            this.answer = parseInt(this.answer) + parseInt(parsedInput[idx + 1]);
            break;
          case '-':
            this.answer = parseInt(this.answer) - parseInt(parsedInput[idx + 1]);
            break;
          case '*':
            this.answer = parseInt(this.answer) * parseInt(parsedInput[idx + 1]);
            break;
          case '/':
            this.answer = parseInt(this.answer) / parseInt(parsedInput[idx + 1]);
            break;
          case '%':
            this.answer = parseInt(this.answer) % parseInt(parsedInput[idx + 1]);
            break;
        }
      }
    });
    return '000';
  }
}

import { Component, inject } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'calculator-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

  x: number = 0;
  y: number = 0;
  xDiv: number = 0;
  yDiv: number = 0;
  result: number|any = 0;
  resultDiv: number|any = 0;

  calculatorService = inject(CalculatorService);

  calculate(operation:string){
    switch(operation){
      case "sum":
        this.result = this.calculatorService.add(Number(this.x), Number(this.y));
        break;
      case "division":
        this.resultDiv = this.calculatorService.division(Number(this.xDiv), Number(this.yDiv));
        break;
      case "multiple":
        this.result = this.calculatorService.multiple(Number(this.x), Number(this.y));
        break;
      case "substrate":
        this.result = this.calculatorService.substrate(Number(this.x), Number(this.y));
        break;
    }

  }

}

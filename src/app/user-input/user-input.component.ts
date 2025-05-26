import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentResultsService } from '../investment-results/investment-results.service';
import { UserInput } from './user-input.model';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment = signal<string>('');
  annualInvestment = signal<string>('');
  duration = signal<string>('');
  expectedReturn = signal<string>('');
  isSubmited = signal<boolean>(false);
  private investmentResultsService = inject(InvestmentResultsService);

  onSubmit() {
    this.isSubmited.set(true);
    const userInput: UserInput = {
      initialInvestment: parseFloat(this.initialInvestment()),
      annualInvestment: parseFloat(this.annualInvestment()),
      duration: parseInt(this.duration(), 10),
      expectedReturn: parseFloat(this.expectedReturn()),
    };
    this.investmentResultsService.calculateInvestmentResults(userInput);
  }
}

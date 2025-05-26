import { Injectable } from '@angular/core';
import { type UserInput } from '../user-input/user-input.model';
import { type InvestmentResult } from './investment-results.model';

@Injectable({ providedIn: 'root' })
export class InvestmentResultsService {
  private investmentResults: InvestmentResult[] = [];

  getInvestmentResults(): InvestmentResult[] {
    return this.investmentResults;
  }

  calculateInvestmentResults(userInput: UserInput): void {
    const { initialInvestment, annualInvestment, duration, expectedReturn } =
      userInput;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.investmentResults = annualData;
  }
}

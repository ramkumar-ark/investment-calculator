import { Component, computed, inject } from '@angular/core';
import { InvestmentResultsService } from './investment-results.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private investmentResultsService = inject(InvestmentResultsService);
  get investmentResults() {
    return this.investmentResultsService.getInvestmentResults();
  }
}

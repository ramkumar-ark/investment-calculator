import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  onSubmit() {
    console.log(`Initial Investment: ${this.initialInvestment()}`);
    console.log(`Annual Investment: ${this.annualInvestment()}`);
    console.log(`Duration: ${this.duration()}`);
    console.log(`Expected Return: ${this.expectedReturn()}`);
  }
}

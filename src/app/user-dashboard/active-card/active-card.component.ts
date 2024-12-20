import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DashboardService } from '../../services/dashboard/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-active-card',
  templateUrl: './active-card.component.html',
  styleUrl: './active-card.component.scss'
})
export class ActiveCardComponent implements OnInit {

  activeCardForm: FormGroup = new FormGroup({});
  cardHolderName: string = '';

  constructor(
    private _fb: FormBuilder,
    private dashboardService: DashboardService,
    private route: Router
  ) {}

  ngOnInit(): void {
    if (window.history.state.firstName) {
      this.cardHolderName = window.history.state.firstName + ' ' + window.history.state.lastName;
    }
    this.inItForm();
  }

  inItForm() {
    this.activeCardForm = this._fb.group({
      cardNumber: [''],
      activationCode: [''],
    });
  }


  onActivateCard() {
    if (this.activeCardForm.valid) {
      const payload = {
        cardId: window.history.state.cardID,
        smsOtp: '717966',
        cardNumber: this.activeCardForm.value.cardNumber,
        activationCode: this.activeCardForm.value.activationCode
      };
      this.dashboardService.activateCard(payload).subscribe((res) => {
      }, (error) => {
        console.error(error);
      })
    }
  }

  onBack() {
    this.route.navigate(['/dashboard']);
  }
}

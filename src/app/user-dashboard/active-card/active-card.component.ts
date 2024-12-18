import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DashboardService } from '../../services/dashboard/dashboard.service';

@Component({
  selector: 'app-active-card',
  templateUrl: './active-card.component.html',
  styleUrl: './active-card.component.scss'
})
export class ActiveCardComponent implements OnInit {

  activeCardForm: FormGroup = new FormGroup({});

  constructor(
    private _fb: FormBuilder,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.inItForm();
  }

  inItForm() {
    this.activeCardForm = this._fb.group({
      cardId: [''],
      smsOtp: [''],
      cardNumber: [''],
      activationCode: [''],
    });
  }


  onActivateCard() {
    if (this.activeCardForm.valid) {
      this.dashboardService.activateCard(this.activeCardForm.value).subscribe((res) => {
        console.log(res);
      }, (error) => {
        console.log(error);
      })
    }
  }
}

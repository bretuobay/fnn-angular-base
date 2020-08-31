import { Component, OnInit, Input } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { Currency } from '../../models';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
  providers: [CurrencyService],
})
export class CurrencyComponent implements OnInit {
  @Input() currency: string = 'Rupees';

  public currencyList: Currency;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService
      .getCurrencyData(this.currency)
      .subscribe((data: Currency) => {
        this.currencyList = data;
      });
  }
}

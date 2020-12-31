import 'bootstrap.css';
import '@grapecity/wijmo.styles/wijmo.css';
import './styles.css';

import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
    selector: 'app-component',
    templateUrl: 'src/app.component.html'
})

export class AppComponent {
  billAmount = 1;
  tipPercentage = 0.01;
  numberOfPeople = 1;
  tipPerPerson = 0.0;
  totalPerPerson = 0.0;
  dataObject : object;
  tipId : Number;

  constructor(private http: HttpClient)
  {
    
  }

  // calculate tip with the required data
  calculateTip()
  {
    this.tipPerPerson = Number(((this.billAmount * this.tipPercentage) / this.numberOfPeople).toFixed(2));
    this.totalPerPerson = Number(((this.billAmount + (this.tipPerPerson * this.numberOfPeople)) / this.numberOfPeople).toFixed(2)); 
    this.sendData();
  }

  // send data to the server
  sendData()
  {
      this.dataObject = {
          TipId : Math.floor(100000 + Math.random() * 900000),
          BillAmount : this.billAmount,
          TipPercentage : this.tipPercentage*100,
          NumberOfPeople : this.numberOfPeople,
          TipPerPerson : this.tipPerPerson,
          TotalPerPerson : this.totalPerPerson
      }

      this.http.post("http://localhost:4400",this.dataObject).toPromise().then((data : any) => 
        alert(data.status)
      );
  }
}

@NgModule({
    imports: [WjInputModule, BrowserModule, HttpClientModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule {
}

enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);


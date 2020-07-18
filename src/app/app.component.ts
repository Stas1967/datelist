import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

export interface Reservas {
  no: number;
  from: Date;
  to: Date;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datelist';
  day: Date | null;
  dateA: Date | null;
  dateB: Date | null;
  datelist: string[] = [];
  displayEvent: string | undefined | null;
  // reserva: Reservas[] = [
  //   {no: 1, from: new Date('07, 15, 2020'), to: new Date('07, 22, 2020'), name: 'Janusz'},
  //   {no: 2, from: new Date('07, 15, 2020'), to: new Date('07, 22, 2020'), name: 'Andrzej'},
  //   {no: 3, from: new Date('07, 15, 2020'), to: new Date('07, 22, 2020'), name: 'Krzysztof'},
  //   {no: 4, from: new Date('07, 15, 2020'), to: new Date('07, 22, 2020'), name: 'Dariusz'},
  //   {no: 5, from: new Date('07, 15, 2020'), to: new Date('07, 22, 2020'), name: 'Baltazar'},
  //   {no: 6, from: new Date('07, 15, 2020'), to: new Date('07, 22, 2020'), name: 'Mikolaj'}
  // ];

  constructor() {
    const dNow = new Date();
      this.day = new Date(dNow.getFullYear(), dNow.getMonth(), dNow.getDate());
      this.dateA = new Date(dNow.getFullYear(), dNow.getMonth(), dNow.getDate());
      this.dateB = new Date(dNow.getFullYear(), dNow.getMonth(), dNow.getDate());
  }

  newDateA = (eventA: MatDatepickerInputEvent<Date>) => {
    this.datelist = [];    
    console.log('DateA', eventA.target.value);
    const dA = eventA.target.value
    if (dA != null) {
      this.dateA = eventA.target.value;
    }    
  }

  newDateB = (eventB: MatDatepickerInputEvent<Date>) => {
    this.datelist = [];
    this.displayEvent = 'DateA ' + this.dateA?.toLocaleDateString() + ' ' + 'DateB ' + eventB.target.value?.toLocaleDateString();
    const dB = eventB.target.value
    if (dB != null) {
      this.dateB = eventB.target.value;
    }
  }

  getListOfDate = () => {
    if (this.dateA && this.dateB) {
      for (const day = this.dateA; day <= this.dateB; day.setDate(day.getDate() + 1)) {
        this.datelist.push(day.toLocaleDateString('es'))
        console.log(day.toLocaleDateString('es'))
      }
    }    
  } 
}

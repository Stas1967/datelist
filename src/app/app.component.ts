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
  dateA: Date;
  dateB: Date;
  datelist: string[] = [];
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
    console.log('DateA', eventA.target.value);
    const dA = eventA.target.value
    if (dA != null) {
      this.dateA = dA;
    }
  }

  newDateB = (eventB: MatDatepickerInputEvent<Date>) => {
    const dB = eventB.target.value
    if (dB != null) {
      this.dateB = dB;
    }
  }

  getListOfDate = () => {
    this.datelist = [];
    this.gdbd(this.dateA, this.dateB).forEach(dx => {
      this.datelist.push(dx.toLocaleDateString('es'))
    })
  }

  gdbd = (start: Date, end: Date) => {
    let dates: Date[] = []
    const theDate = new Date(start)
    while (theDate <= end) {
      dates = [...dates, new Date(theDate)]
      theDate.setDate(theDate.getDate() + 1)
    }
    return dates
  }
}
import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

export interface Days {
  oneday: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datelist';
  day: Date;
  dateA: Date | null;
  dateB: Date | null;
  datelist: string[] = [];

  constructor() {
      this.day = new Date();
      this.dateA = new Date();
      this.dateB = new Date();
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
    console.log('DateA', this.dateA?.toLocaleDateString(), 'DateB', eventB.target.value?.toLocaleDateString());
    const dB = eventB.target.value
    if (dB != null) {
      this.dateB = eventB.target.value;
    }
  }

  getListOfDate = () => {
    if (this.dateA && this.dateB) {
      for (this.day = this.dateA; this.day <= this.dateB; this.day.setDate(this.day.getDate() + 1)) {
        this.datelist.push(this.day.toLocaleDateString('es'))
        console.log(this.day.toLocaleDateString('es'))
      }
    }    
  } 
}

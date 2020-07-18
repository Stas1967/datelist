import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

export interface Dni {
  dzien: Date;
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
      this.dateB.setDate(this.dateB.getDate() + 7);
  }

  addEvent1 = (event: MatDatepickerInputEvent<Date>) => {
    this.datelist = [];
    console.log('DateA', event.target.value);
    const da = event.target.value
    if (da != null) {
      this.dateA = event.target.value;
    }    
  }

  addEvent2 = (event: MatDatepickerInputEvent<Date>) => {
    this.datelist = [];
    console.log('DateB', event.target.value);
    const db = event.target.value
    if (db != null) {
      this.dateB = event.target.value;
    }
  }
    

  getListOfDate = () => {
    if (this.dateA && this.dateB) {
      for (this.day = this.dateA; this.day <= this.dateB; this.day.setDate(this.day.getDate() + 1)) {
        console.log(this.day);
        this.datelist.push(this.day.toLocaleDateString('es'))
      }
    }
    
    
  }
 
}

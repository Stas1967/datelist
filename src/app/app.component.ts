import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';


export interface Reservas {
  no: number;
  from: Date;
  to: Date;
  name: string;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'datelist';
  day: Date | null;
  dateA: Date;
  dateB: Date;
  datelist: string[] = [];
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  quantity = 0;
  subtotal = 0;
  product_price = 15;

  reserva: Reservas[] = [
    { no: 1, from: new Date('07, 15, 2020'), to: new Date('07, 22, 2020'), name: 'Janusz', price: 152.35 },
    { no: 2, from: new Date('07, 17, 2020'), to: new Date('07, 24, 2020'), name: 'Andrzej', price: 152.35 },
    { no: 3, from: new Date('07, 05, 2020'), to: new Date('07, 19, 2020'), name: 'Krzysztof', price: 304.64 },
    { no: 4, from: new Date('07, 13, 2020'), to: new Date('07, 22, 2020'), name: 'Dariusz', price: 152.35 },
    { no: 5, from: new Date('07, 22, 2020'), to: new Date('07, 30, 2020'), name: 'Baltazar', price: 152.35 },
    { no: 6, from: new Date('07, 15, 2020'), to: new Date('07, 22, 2020'), name: 'Mikolaj', price: 152.35 },
    { no: 7, from: new Date('07, 17, 2020'), to: new Date('07, 26, 2020'), name: 'Stanislaw', price: 152.35 }
  ];

  

  dataSource = new MatTableDataSource(this.reserva);
  displayedColumns: string[] = ['from', 'to', 'no', 'name', 'price'];

  constructor(private route: Router) {
    const dNow = new Date();
    this.day = new Date(dNow.getFullYear(), dNow.getMonth(), dNow.getDate());
    this.dateA = new Date(dNow.getFullYear(), dNow.getMonth(), dNow.getDate());
    this.dateB = new Date(dNow.getFullYear(), dNow.getMonth(), dNow.getDate());
  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

  naviga = () => {
    this.route.navigate(['/myto', {data: this.reserva[1].from} ])
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
    // this.ListOfDate(this.dateA, this.dateB);
    this.gdbd(this.dateA, this.dateB).forEach(dx => {
      this.datelist.push(dx.toLocaleDateString());
    })
  }

  ListOfDate = (start: Date, end: Date) => {
    let dates: Date[] = []
    for (this.day = start; this.day <= end; this.day.setDate(this.day.getDate() + 1)) {
      dates.push(this.day)
      console.log(this.day.toLocaleDateString('es'))
    }
  }

  gdbd = (start: Date, end: Date) => {
    let dates: Date[] = []
    const date = new Date(start)
    while (date <= end) {
      dates = [...dates, new Date(date)]
      date.setDate(date.getDate() + 1)
    }
    return dates
  }

  getTotal = () => {
    return this.reserva.map(t => t.price).reduce((acc, value) => acc + value, 0)
  }

  plus(event: any) {
    event = 1;
    this.quantity += event;
    console.log(this.quantity);
    this.getT();
  }
  
  minus(event: any){  
    event = 1;  
    this.quantity -=event;
    console.log(this.quantity); 
    this.getT();
  }

  getT(): void {
    const to = this.quantity * this.product_price;
    console.log(to);
    this.subtotal = to;
  }

  getTotalP() {
    return this.quantity * this.product_price;
  }

  SaveProdPrice(): void {
      console.log('ProdPrice', this.product_price);
      console.log('ProdQuant', this.quantity);
      console.log('SubTotal', this.getTotalP());
  }
}
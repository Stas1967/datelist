import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavitoComponent } from './navito/navito.component';

export interface Reservas {
  no: number;
  from: Date;
  to: Date;
  name: string;
  price: number;
}

const ko: Reservas[] = [
  { no: 1, from: new Date('07, 15, 2020'), to: new Date('07, 22, 2020'), name: 'Janusz', price: 152.35 },
  { no: 2, from: new Date('07, 17, 2020'), to: new Date('07, 24, 2020'), name: 'Andrzej', price: 152.35 },
  { no: 3, from: new Date('07, 05, 2020'), to: new Date('07, 19, 2020'), name: 'Krzysztof', price: 304.64 },
  { no: 4, from: new Date('07, 15, 2020'), to: new Date('07, 22, 2020'), name: 'Dariusz', price: 152.35 },
  { no: 5, from: new Date('07, 15, 2020'), to: new Date('07, 22, 2020'), name: 'Baltazar', price: 152.35 },
  { no: 6, from: new Date('07, 15, 2020'), to: new Date('07, 22, 2020'), name: 'Mikolaj', price: 152.35 }
];


const routes: Routes = [
  {path: 'myto', component: NavitoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navito',
  templateUrl: './navito.component.html',
  styleUrls: ['./navito.component.css']
})
export class NavitoComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(jx => {
      console.log(jx);
    })
   }

  ngOnInit(): void {
  }

}

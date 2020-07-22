import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-navito',
  templateUrl: './navito.component.html',
  styleUrls: ['./navito.component.css']
})
export class NavitoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private meta: Meta, private titleserv: Title) {
    route.params.subscribe(jx => {
      console.log(jx);
    })
   }

  ngOnInit(): void {
    this.titleserv.setTitle('New Title')
    this.meta.addTags([
      { name: 'keywords', content: 'Another page meta' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Diservitec' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ])
  }

}

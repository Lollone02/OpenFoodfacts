import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CiboService } from '../cibo.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {
  query: string;
  title = '';
  obs: Observable<Object>;
  results: any;
  // faccio iniettare lo spotify service e faccio una ricerca
  constructor(public cibo:CiboService) {

  }

  submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obs = this.cibo.search(this.query);
    this.obs.subscribe((data) => { this.results = data; console.log(this.results) });
  }




}

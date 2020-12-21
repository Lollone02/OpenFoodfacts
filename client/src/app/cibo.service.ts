import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CiboService {

  constructor(private http:HttpClient) { }
  search(query:string){
    const URL = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&page_size=10&json=true`;
    const headers = new HttpHeaders("Content-Type");

    let obsFood = this.http.get(URL, { headers });
    return obsFood;

  }
}

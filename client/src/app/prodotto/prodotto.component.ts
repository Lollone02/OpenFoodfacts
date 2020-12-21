import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CiboService } from '../cibo.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';


@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent implements OnInit {
routeObs: Observable<ParamMap>;

  prodName : any;
  foodServiceObs: any;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CiboService,
    private location: Location ) { }



  ngOnInit(): void {

    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }


  getRouterParam = (params: ParamMap) =>
  {
    let prodottoId = params.get('id');
    console.log (prodottoId);
    this.foodServiceObs = this.service.getDetailsID(prodottoId);
    this.foodServiceObs.subscribe((data)=>this.prodName = data);

  }

  back() : void
  { this.location.back(); }

}



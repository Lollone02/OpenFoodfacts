import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ProdottoComponent } from './prodotto/prodotto.component';

const routes: Routes = [{path:'search', component: SearchComponent}, {path:'prodotto', component: ProdottoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

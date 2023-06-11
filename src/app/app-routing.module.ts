import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { SimuladorComponent } from './simulador/simulador.component';

// TODO: #4. Define unique page titles
const routes: Routes = [
  { path: 'shop', component: ShopComponent, title: 'Simulador de Crédito' },
  { path: 'simulador', component: SimuladorComponent, title: 'Simulador de Crédito' },
  { path: 'about', component: AboutComponent, title: 'Resultado da Simulação' },
  { path: '',   redirectTo: '/shop', pathMatch: 'full' },
  { path: '**', component: ShopComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

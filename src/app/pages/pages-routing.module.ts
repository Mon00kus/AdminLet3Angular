import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
/* import { CommonModule } from '@angular/common'; */
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { StockComponent } from './stock/stock.component';

const routes : Routes = [
 {
  path : 'dashboard', component: PagesComponent,
  children : [
    {
      path: '', component: DashboardComponent
    },
    {
      path: 'usuarios', component: UsuariosComponent
    },
    {
      path: 'productos', component: ProductosComponent
    },
    {
      path: 'stock', component: StockComponent
    }
  ]
 }
]

@NgModule({
  declarations: [],
  imports: [
    /* CommonModule */
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }

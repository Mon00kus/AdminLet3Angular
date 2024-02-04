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
      path: '', component: DashboardComponent, data: { titulo :'Dashboard' }
    },
    {
      path: 'usuarios', component: UsuariosComponent, data: { titulo :'Usuarios' }
    },
    {
      path: 'productos', component: ProductosComponent, data: { titulo :'Productos' }
    },
    {
      path: 'stock', component: StockComponent, data: { titulo :'Stock' }
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

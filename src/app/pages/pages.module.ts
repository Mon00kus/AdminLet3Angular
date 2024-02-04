import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductosComponent } from './productos/productos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { StockComponent } from './stock/stock.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DashboardComponent,
    ProductosComponent,
    UsuariosComponent,
    StockComponent,
    PagesComponent
  ],
  exports: [
    DashboardComponent,
    ProductosComponent,
    UsuariosComponent,
    StockComponent    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReporteRoutingModule } from './reporte-routing.module';
import { RiesgoComponent } from './riesgo/riesgo.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    RiesgoComponent
  ],
  imports: [
    CommonModule,
    ReporteRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class ReporteModule { }

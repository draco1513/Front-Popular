import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReporteRoutingModule } from './reporte-routing.module';
import { RiesgoComponent } from './riesgo/riesgo.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DataSource } from '@angular/cdk/collections';
import { MatStep } from '@angular/material/stepper';


@NgModule({
  declarations: [
    RiesgoComponent,

  ],
  imports: [
    CommonModule,
    ReporteRoutingModule,
    MatTableModule,
    MatPaginatorModule,

  ]
})
export class ReporteModule { }

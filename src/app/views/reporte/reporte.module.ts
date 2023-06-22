import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReporteRoutingModule } from './reporte-routing.module';
import { RiesgoComponent } from './riesgo/riesgo.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DataSource } from '@angular/cdk/collections';
import { MatStep } from '@angular/material/stepper';
import { Riesgo2Component } from './riesgo2/riesgo2.component';


@NgModule({
  declarations: [
    RiesgoComponent,
    Riesgo2Component,

  ],
  imports: [
    CommonModule,
    ReporteRoutingModule,
    MatTableModule,
    MatPaginatorModule,

  ]
})
export class ReporteModule { }

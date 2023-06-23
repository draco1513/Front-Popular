import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RiesgoComponent } from './riesgo/riesgo.component';
import { MatTableModule } from '@angular/material/table';
import { Riesgo2Component } from './riesgo2/riesgo2.component';

const routes: Routes = [
  {
    path: 'riesgo',
    component: RiesgoComponent,
    data: {
      title: 'Riesgo',
      breadcrumb: 'Riesgo'
    }
  },
  {
    path: 'riesgo2',
    component: Riesgo2Component,
    data: {
      title: 'Riesgo2',
      breadcrumb: 'Riesgo2'
    }
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes), MatTableModule
  ],
  exports: [RouterModule]
})
export class ReporteRoutingModule { }

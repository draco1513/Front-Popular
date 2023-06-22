import { Component, OnInit, ViewChild } from '@angular/core';
import { TablesService } from '../tables.service';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort } from '@angular/material/sort';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { egretAnimations } from 'app/shared/animations/egret-animations';
import { MatTableModule } from '@angular/material/table'
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-riesgo',
  templateUrl: './riesgo.component.html',
  styleUrls: ['./riesgo.component.scss'],
  animations: egretAnimations

})
export class RiesgoComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = [];

  name = 'ExcelSheet.xlsx';
  dataSource: MatTableDataSource<{ CODIGOTCHN: string; CMONEDA: number; ndocumento: number; tapaterno: string; tamaterno: string; tnombres: string; dnacimiento: string; tdireccion: string; cubigeo: string; departamento: string; provincia: string; distrito: string; cinmueble: number; actividad: string; cuotasatrasdas: number; estado: string; SUELDO: number; fdesembolso: number; tipooperacion: string; S_INFOCORP: string; NVALORIZACION: string; V_EDIFICACION: number; V_PROPIEDAD: number; V_COMERCIAL: number; V_REALIZACIONSOL: number; V_REALIZACIONDOL: number; } | { CODIGOTCHN: string; CMONEDA: number; ndocumento: number; tapaterno: string; tamaterno: string; tnombres: string; dnacimiento: string; tdireccion: string; cubigeo: number; departamento: string; provincia: string; distrito: string; cinmueble: number; actividad: string; cuotasatrasdas: number; estado: string; SUELDO: number; fdesembolso: number; tipooperacion: string; S_INFOCORP: string; NVALORIZACION: string; V_EDIFICACION: number; V_PROPIEDAD: number; V_COMERCIAL: number; V_REALIZACIONSOL: number; V_REALIZACIONDOL: number; } | { CODIGOTCHN: string; CMONEDA: number; ndocumento: number; tapaterno: string; tamaterno: string; tnombres: string; dnacimiento: string; tdireccion: string; cubigeo: number; departamento: string; provincia: string; distrito: string; cinmueble: number; cuotasatrasdas: number; estado: string; SUELDO: number; fdesembolso: number; tipooperacion: string; S_INFOCORP: string; NVALORIZACION: string; V_EDIFICACION: number; V_PROPIEDAD: number; V_COMERCIAL: number; V_REALIZACIONSOL: number; V_REALIZACIONDOL: number; actividad?: undefined; }>;

  exportToExcel(): void {
    let element = document.getElementById('season-tble');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name);
  }
  constructor(private tableService: TablesService) { }

  ngOnInit() {
    this.displayedColumns = this.tableService.getDataConf().map((c) => c.prop)
    this.dataSource = new MatTableDataSource(this.tableService.getAll());

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


}


import { Component, OnInit, ViewChild } from '@angular/core';
import { TablesService } from '../tables.service';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort } from '@angular/material/sort';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { egretAnimations } from 'app/shared/animations/egret-animations';
import { MatTableModule } from '@angular/material/table'

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
  dataSource: any;

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


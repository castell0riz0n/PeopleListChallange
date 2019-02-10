import { ErrorComponent } from './../notifications/error/error.component';
import { SuccessComponent } from './../notifications/success/success.component';
import { DataService } from './../../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource, MatSort, MatSnackBar} from '@angular/material';
import { Elements } from '../../models/elements';

// const DATA: Elements[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  isLoading = true;
  peopleList: any;
  displayedColumns: string[] = ['select', 'name', 'trusted'];
  dataSource: any;
  selection = new SelectionModel<Elements>(true, []);
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private service: DataService,
    private toasty: MatSnackBar
  ) {  }

  ngOnInit() {
    this.getData();
  }

  getData()  {
    var data = this.service.getPeople().subscribe(
      res => {
        this.isLoading = false;
        console.log(res);
        this.dataSource = new MatTableDataSource<Elements>(res.people);
        this.dataSource.sort = this.sort;
      },
      error => this.isLoading = false
    );
    return data;
  }


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  makeTrusted() {
    this.toasty.openFromComponent(SuccessComponent, {
      duration: 750,
    });
  }

  makeUntrusted() {
    this.toasty.openFromComponent(ErrorComponent, {
      duration: 750,
    });
  }
}

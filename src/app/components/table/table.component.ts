import { DataService } from './../../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource, MatSort, MatSnackBar} from '@angular/material';
import { Elements } from '../../models/elements';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  untrusted = 0;
  trusted = 1 ;
  duration = 1250;
  isLoading = true;
  peopleList: any;
  displayedColumns: string[] = ['name', 'trusted'];
  dataSource: any;
  selection = new SelectionModel<Elements>(true, []);
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private service: DataService,
    private notificationService: MatSnackBar
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData()  {
    const data = this.service.getPeople().subscribe(
      res => {
        setTimeout( () => {
          this.isLoading = false;
          this.dataSource = new MatTableDataSource<Elements>(res.people);
          this.dataSource.sort = this.sort;
        }, 2500 );
      },
      error => {
        this.isLoading = true;
      }
    );
    return data;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  handleTrust(type: number) {
    this.service.handleTrust(type).subscribe(res => {
        this.showToasty(res);
    },
    error => {
      this.showToasty('Error: ' + error);
        }
    );
  }

  showToasty(res: any) {
    this.notificationService.open(res.text(), null, { duration: this.duration});
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { infoService } from '../infoservice';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ModelComponent } from '../model/model.component';
import { model } from '../model';

@Component({
  selector: 'app-modelgrid',
  templateUrl: './modelgrid.component.html',
  styleUrls: ['./modelgrid.component.css']
})
export class ModelgridComponent implements OnInit {

  models: model[] = [];

    listData!: MatTableDataSource<any>;
    displayedColumns: string[] = ['code','url','name', 'birthDate', 'email', 'actions'];
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    searchKey!: string;

    constructor(
      public service: infoService,
      public dialog: MatDialog) {
  }

  ngAfterViewInit() {
      this.listData.paginator = this.paginator;
  }

  onEdit(row: any) {
      this.service.populateForm(row);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "40%";
      this.dialog.open(ModelComponent, dialogConfig);
  }

  onDelete(code: any){
      if(confirm('Are you sure to delete this record ?')){
          this.service.deleteModel(code);
      this.loadData();
      }
  }




  ngOnInit(): void {
      this.loadData();
  }

  onSearchClear() {
      this.searchKey = "";
      this.applyFilter();
  }

  applyFilter() {
      this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate() {
      this.service.initializeFormGroup();
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "60%";
      const dialogRef = this.dialog.open(ModelComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
          this.loadData();
      });
  }

  public loadData() {
    this.service.getModels()
        .subscribe(models => {
            this.models = models;
            this.listData = new MatTableDataSource(this.models);
            this.listData.sort = this.sort;
            this.listData.paginator = this.paginator;
        });

}
}

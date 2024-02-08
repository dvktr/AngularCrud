import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditEmpComponent } from './add-edit-emp/add-edit-emp.component';
import { ServiceService } from './shared/service.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'firstname',
    'lastname',
    'email',
    'date',
    'gender',
    'education',
    'company',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private service: ServiceService) {}
  ngOnInit(): void {
    this.getEmployeeList();
  }

  openAddEditEmpForm() {
    const dialogRef = this.dialog.open(AddEditEmpComponent);
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val) this.getEmployeeList();
      }
    })
  }

  getEmployeeList() {
    this.service.getAllEmployee().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        alert(err);
      },
    });
  }

  editEmployeeForm(data:any){
    const dialogRef = this.dialog.open(AddEditEmpComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val) this.getEmployeeList();
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteEmployee(id:number){
    this.service.deleteEmployee(id).subscribe({
      next: (res) => {
        alert("Employee deleted!")
        this.getEmployeeList();
      },
      error: (err) => {
        alert(err);
      }
    })
  }
}

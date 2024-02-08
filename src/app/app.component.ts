import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditEmpComponent } from './add-edit-emp/add-edit-emp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular16CRUD';

  constructor(private dialog:MatDialog){};

  openAddEditEmpForm(){
    this.dialog.open(AddEditEmpComponent);
  };
}


import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from '../shared/service.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css'],
})
export class AddEditEmpComponent implements OnInit {
  empForm: FormGroup;
  education: string[] = [
    'None',
    'Intermediate',
    'Graduated',
    'Post Graduated',
    'Master',
  ];
  constructor(
    private fb: FormBuilder,
    private service: ServiceService,
    private dialogRef: MatDialogRef<AddEditEmpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.empForm = this.fb.group({
      firstname: '',
      lastname: '',
      email: '',
      date: '',
      gender: '',
      education: '',
      company: '',
    });
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        this.service
          .updateEmployee(this.data.id, this.empForm.value)
          .subscribe({
            next: (value: any) => {
              alert('Employee Updated Succesfull');
              this.dialogRef.close(true);
            },
            error: (err: any) => {
              alert(err.message);
            },
          });
      } else {
        this.service.addEmployee(this.empForm.value).subscribe({
          next: (value: any) => {
            alert('Employee Added Succesfull');
            this.dialogRef.close(true);
          },
          error: (err: any) => {
            alert(err.message);
          },
        });
      }
    }
  }
}

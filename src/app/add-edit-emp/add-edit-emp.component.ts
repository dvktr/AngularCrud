import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css'],
})
export class AddEditEmpComponent {
  empForm: FormGroup;
  education: string[] = [
    'None',
    'Intermediate',
    'Graduated',
    'Post Graduated',
    'Master',
  ];
  constructor(private fb: FormBuilder) {
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
  onFormSubmit() {
    if(this.empForm.valid){
      console.warn(this.empForm.value)
    }
  }
}

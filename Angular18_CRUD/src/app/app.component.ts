import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { EmployeeModel } from './model/Employee';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Fixed typo: styleUrls instead of styleUrl
})
export class AppComponent {

  employeeForm: FormGroup = new FormGroup({});
  employeeObj: EmployeeModel = new EmployeeModel();
  employeeList: EmployeeModel[] = [];

  constructor() {
    this.createForm();
    const oldData = localStorage.getItem("EmpData");
    if (oldData != null) {
      const parseData = JSON.parse(oldData);
      this.employeeList = parseData;
    }
  }

  // Method to reset the form
  reset() {
    this.employeeObj = new EmployeeModel();
    this.createForm();
  }

  // Method to initialize the form
  createForm() {
    this.employeeForm = new FormGroup({
      empId: new FormControl(this.employeeObj.empId),
      name: new FormControl(this.employeeObj.name, [Validators.required, Validators.minLength(3)]), // Updated for minlength validation
      address: new FormControl(this.employeeObj.address),
      city: new FormControl(this.employeeObj.city),
      contactNo: new FormControl(this.employeeObj.contactNo), // Added required validator for Contact No
      pinCode: new FormControl(this.employeeObj.pinCode), // Added required and minlength validation for Pincode
      state: new FormControl(this.employeeObj.state), // Required validator for State
      emailId: new FormControl(this.employeeObj.emailId, [Validators.required, Validators.email]) // Added required and email validation
    });
  }

  // Save method to add new employee
  onSave() {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched(); // Mark all fields as touched to trigger validation messages
      return;
    }
    
    const oldData = localStorage.getItem("EmpData");
    if (oldData != null) {
      const parseData = JSON.parse(oldData);
      this.employeeForm.controls['empId'].setValue(parseData.length + 1); // Auto-increment empId
      this.employeeList.unshift(this.employeeForm.value);
    } else {
      this.employeeForm.controls['empId'].setValue(1); // Start empId from 1 if no data exists
      this.employeeList.unshift(this.employeeForm.value);
    }
    localStorage.setItem("EmpData", JSON.stringify(this.employeeList));
    this.createForm(); // Reset the form after save
  }

  // Edit method to fill form with selected employee's data
  onEdit(item: EmployeeModel) {
    this.employeeObj = item;
    this.createForm(); // Re-create the form with selected employee's data
  }

  // Delete method to remove an employee by empId
  onDelete(empId: number) {
    this.employeeList = this.employeeList.filter(emp => emp.empId !== empId); // Remove employee with given empId
    localStorage.setItem("EmpData", JSON.stringify(this.employeeList));
  }

  // Update method to modify the selected employee's data
  onUpdate() {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched(); // Mark all fields as touched to trigger validation messages
      return;
    }

    const record = this.employeeList.find(m => m.empId == this.employeeForm.controls['empId'].value);
    if (record != undefined) {
      record.name = this.employeeForm.controls['name'].value;
      record.address = this.employeeForm.controls['address'].value;
      record.city = this.employeeForm.controls['city'].value;
      record.contactNo = this.employeeForm.controls['contactNo'].value;
      record.pinCode = this.employeeForm.controls['pinCode'].value;
      record.state = this.employeeForm.controls['state'].value;
      record.emailId = this.employeeForm.controls['emailId'].value;
    }
    localStorage.setItem("EmpData", JSON.stringify(this.employeeList));
    this.employeeObj = new EmployeeModel();
    this.createForm(); // Reset the form after update
  }
}

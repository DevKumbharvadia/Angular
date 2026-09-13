import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { APIResponseModel } from '../../model/interface/interface';
import { DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Employee } from '../../model/class/class';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, DatePipe, JsonPipe],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit {

  employeeObj: Employee = new Employee();
  employeeList: Employee[] = [];
  currentDate: Date = new Date();

  employeeService = inject(EmployeeService);

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getAllEmployees().subscribe((res: APIResponseModel) => {
      this.employeeList = res.data;
    });
  }

  onSaveEmployee() {
    this.employeeService
      .addUpdateEmployee(this.employeeObj)
      .subscribe((res: APIResponseModel) => {
        if (res.result) {
          alert('Employee created/updated');
          this.loadEmployees();
          this.employeeObj = new Employee();
        } else {
          alert(res.message);
        }
      });
  }

  onDelete(id: number) {
    const isDelete = confirm("Are you sure?");
    if (isDelete) {
      this.employeeService
        .deleteEmployeeById(id)
        .subscribe((res: APIResponseModel) => {
          if (res.result) {
            alert('Employee deleted');
            this.loadEmployees();
          } else {
            alert(res.message);
          }
        });
    }
  }

  onEdit(employee: Employee) {
    this.employeeObj = employee;
  }
}

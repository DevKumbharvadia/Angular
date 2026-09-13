import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { APIResponseModel } from '../model/interface/interface';
import { IEmployee } from '../model/interface/interface'; // Assuming you have an IEmployee interface or class

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  // Method to get all employees
  getAllEmployees(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URl + "GetAllEmployee");
  }

  // Method to add or update employee
  addUpdateEmployee(employee: IEmployee): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(environment.API_URl + "UpdateEmployee", employee);
  }

  // Method to delete employee by ID
  deleteEmployeeById(empId: number): Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>(environment.API_URl + "DeleteEmployeeByEmpId?empId=" + empId);
  }
}

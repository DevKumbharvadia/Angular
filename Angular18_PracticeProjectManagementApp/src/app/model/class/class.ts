export class Client {
    clientId: number;
    contactPersonName: string;
    companyName: string;
    address: string;
    city: string;
    pincode: string;
    state: string;
    employeeStrength: number;
    gstNo: string;
    contactNo: string;
    regNo: string;
  
    constructor() {
      this.clientId = 0; // Default value for clientId
      this.contactPersonName = ''; // Default empty string for contact person
      this.companyName = ''; // Default empty string for company name
      this.address = ''; // Default empty string for address
      this.city = ''; // Default empty string for city
      this.pincode = ''; // Default empty string for pincode
      this.state = ''; // Default empty string for state
      this.employeeStrength = 0; // Default value for employee strength
      this.gstNo = ''; // Default empty string for GST number
      this.contactNo = ''; // Default empty string for contact number
      this.regNo = ''; // Default empty string for registration number
    }
  }
  
  export class Employee {
    empName: string;
    empId: number;
    empCode: string;
    empEmailId: string;
    empDesignation: string;
    role: string;

    constructor(){
      this.empName = '';
      this.empId = 0;
      this.empCode = '';
      this.empEmailId = '';
      this.empDesignation = '';
      this.role = '';
    }
  }
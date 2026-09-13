import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { APIResponseModel, IDesignation } from '../../model/interface/interface';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {

  isLoder = true;
  designationList: IDesignation[] = [];
  masterService = inject(MasterService);

  ngOnInit(): void {
      this.masterService.getDesignations().subscribe((result: APIResponseModel) =>{
        this.designationList = result.data;
        this.isLoder = false;
      },error => {
        alert("API error")
        this.isLoder = false;
      }
    )
  }

}

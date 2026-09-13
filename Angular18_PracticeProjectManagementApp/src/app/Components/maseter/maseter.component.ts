import { Component } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { DesignationComponent } from '../designation/designation.component';
import { RolesComponent } from '../roles/roles.component';

@Component({
  selector: 'app-maseter',
  standalone: true,
  imports: [DesignationComponent, RolesComponent, NgClass],
  templateUrl: './maseter.component.html',
  styleUrl: './maseter.component.css',
})
export class MaseterComponent {
  currentComponent = 'Role';

  changeTab(tabName: string) {
    this.currentComponent = tabName;
  }
}

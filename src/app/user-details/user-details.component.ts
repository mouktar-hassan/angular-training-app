import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Employee } from '../models/employee';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'user-details-component',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  employee!: Employee;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) {
    this.route.paramMap.subscribe(params => {
      const index = Number(params.get('id'));
      this.employee = this.employeeService.getEmployee(index);
    });
  }

}

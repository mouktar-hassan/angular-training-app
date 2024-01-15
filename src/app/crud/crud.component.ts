import { Component } from '@angular/core';
import { Employee } from '../models/employee';
import { FormsModule, NgForm } from '@angular/forms';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'crud-component',
  standalone: true,
  imports: [FormsModule, NgFor, CommonModule,RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {

  listEmployee: Employee[]=[];

  constructor(private router:Router, private employeeService:EmployeeService){}

  ngOnInit(){
    this.listEmployee = this.employeeService.getEmployees();
  }

  crudTitle = "Opérations de CRUD";

  selectedIndex: number = 0;

addEmplyoyee(form: NgForm){
  const {name, role } = form.value;
  this.listEmployee.push({name, role})
}

deleteEmployee(index : number){
  this.listEmployee.splice(index, 1);
}

selectedEmployee: any = {};

selectEmployee(index: number) {
    this.selectedEmployee = { ...this.listEmployee[index] };
    this.selectedIndex = index;  // Stocker l'index pour la mise à jour
}

selectEmploeeToSee(index: number){
  this.router.navigate(['/user-details-component', index]);
}
/*
selectEmployee(index: number){
  this.router.navigate(['/user-details', index]);
}
*/

updateEmployee(form: NgForm) {
    this.listEmployee[this.selectedIndex] = this.selectedEmployee;
    // Autres logiques comme la fermeture du formulaire ou la mise à jour du serveur
}


}
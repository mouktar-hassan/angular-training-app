import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private listEmployee: Employee[] = [
    { name: "HASSAN", role: "Président" },
    { name: "Fozia", role: "Manager" },
    { name: "Mouktar", role: "Développeur" }
  ];

  getEmployees(): Employee[] {
    return this.listEmployee;
  }

  getEmployee(index: number): Employee {
    return this.listEmployee[index];
  }

  // Ajoutez ici d'autres méthodes pour manipuler les données (ajout, suppression, mise à jour)
}

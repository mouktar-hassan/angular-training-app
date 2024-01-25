import { Component, OnInit } from '@angular/core';
import { httpServices } from './http-crud.service';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';
import { User } from '../models/User';

@Component({
  selector: 'httpCrud-component',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './http-crud.component.html',
  styleUrl: './http-crud.component.css'
})
export class HttpCrudComponent implements OnInit{

  users: any[] = [];
  //user?: User;
  user: User = {
    email: '',       
    motDePasse: '',
    role: '',
    telephone: '',
    nom: '',
    prenom: '',
    adresse: '',
    conducteur: {
      permis: ''
    } ,
    partenaire: {
      societe: '',
      service: ''
    }
  };  

  constructor(private httpCrudServices: httpServices){}

  //opération d'initialisation pour le composant
  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(){
    this.httpCrudServices.getAllUsers().subscribe({
      next: (data: any) => {
        this.users = data._embedded.usersList;
      },
      error: (error) => {
        console.error('Erreur de chargement des utilisateurs', error);
      }
    });
  }

  onAddUserClick(form : NgForm){
    /*
    const {
      email,
      motDePasse,
      role,
      telephone,
      nom,
      prenom,
      adresse,
      conducteur,
      partenaire,
    } = form.value;*/
    this.user = form.value;

    this.httpCrudServices.addUser(this.user).subscribe({
      next: (data: any) => {
        console.log(`Success :${data}`);
        form.reset();
      },
      error: (error) => {
        console.error('Erreur d\'ajout d\'utilisateur', error);
      }
    })

  }

  onResetClick(form: NgForm){
    return form.reset();
  }

  onDeleteUserClick(userId:number){
    this.httpCrudServices.deleteUser(userId).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (error) => {
        console.error(`Erreur de suppression de l\'utilisateur avec l\index ${userId}`, error);
      }
    });
  }

  

  

  selectUser(index : number){}

}

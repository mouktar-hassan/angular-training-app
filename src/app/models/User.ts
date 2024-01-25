import { Conducteur } from "./conducteur";
import { Partenaire } from "./partenaire";

export interface User {
    email: string;
    motDePasse: string;
    role: string;
    telephone: string;
    nom: string;
    prenom: string;
    adresse: string;
    conducteur: Conducteur;
    partenaire: Partenaire
}
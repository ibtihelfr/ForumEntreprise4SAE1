export enum EtatCondidature{
  Waitlisted,
  Accepted,
    Rejected,
}


export class Condidature {
    idCondidature: number;
    etatCondidature: EtatCondidature;
    coverLetter: string;
    entretien: Entretien;
    offre: Offre;
    user: User;
  }
  
  export interface Entretien {
    // Définissez les propriétés de l'entité Entretien si nécessaire
  }
  
  export interface Offre {
    // Définissez les propriétés de l'entité Offre si nécessaire
  }
  
  export interface User {
    // Définissez les propriétés de l'entité User si nécessaire
  }
  
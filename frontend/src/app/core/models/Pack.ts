export enum TypePack {
  DIAMANT = "DIAMANT",
  GOLD = "GOLD",
  SILVER = "SILVER",
  FREE = "FREE"
}
  
  export class Pack {
    idPack: number;
    typePack: TypePack;
    montant: number;
    description: string;
    nbPlace: number;
  }
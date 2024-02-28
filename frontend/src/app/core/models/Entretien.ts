export class Entretien {
    idEntretien: number;
    time: string;
    date: string;
    room: string;
  
    constructor(
      idEntretien: number,
      time: string,
      date: string,
      room: string
    ) {
      this.idEntretien = idEntretien;
      this.time = time;
      this.date = date;
      this.room = room;
    }
  }
  
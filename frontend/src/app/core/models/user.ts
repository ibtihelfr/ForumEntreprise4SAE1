    export class User {
        id: number;
        cin: number;
        firstName: string;
        lastName: string;
        picture: string;
        role: string; // Assuming Role is a string, you might need to adjust this based on your Enum implementation
        email: string;
        phoneNumber: number;
        password: string;
        cv: string;
      
        announcements: Announcement[];
        reclamations: Reclamation[];
        sponsors: Sponsor[];
        forum: Forum[];
        reservations: Reservation[];
      }
      
      export class Announcement {
        // Define properties for Announcement if not already defined in your entity
      }
      
      export class Reclamation {
        // Define properties for Reclamation if not already defined in your entity
      }
      
      export class Sponsor {
        // Define properties for Sponsor if not already defined in your entity
      }
      
      export class Forum {
        // Define properties for Forum if not already defined in your entity
      }
      
      export class Reservation {
        // Define properties for Reservation if not already defined in your entity
      }
      


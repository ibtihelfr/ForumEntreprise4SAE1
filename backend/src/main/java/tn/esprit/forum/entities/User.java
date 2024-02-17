package tn.esprit.forum.entities;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import tn.esprit.forum.entities.Enum.Role;

import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Table(name = "forum_user") // Specify the table name to avoid conflict with reserved keyword "user"
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    Long id;
    int cin;
    String firstName;
    String lastName;
    String picture;
    @Enumerated(EnumType.STRING)
    Role role;
    String email;
    int phoneNumber;
    String password;
    String cv;



    @OneToMany(mappedBy = "user")
    List<Announcement> announcements;
    @ManyToMany(mappedBy = "users")
    List<Reclamation> reclamations;
    @OneToMany(mappedBy = "user")
    List<Sponsor> sponsors;

    @OneToMany(mappedBy = "user")
    List<Forum> forum;

    @OneToMany
    List<Reservation> reservations;
}

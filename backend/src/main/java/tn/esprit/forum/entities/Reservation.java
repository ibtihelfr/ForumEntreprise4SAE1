package tn.esprit.forum.entities;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    Long idReservation;
    String refStand;
    LocalDateTime dateReservation;


    @OneToOne
    Pack pack;

    @OneToMany(cascade = CascadeType.ALL)
    List<User> user;

    @OneToOne(cascade = CascadeType.ALL)
    Facture facture;
}

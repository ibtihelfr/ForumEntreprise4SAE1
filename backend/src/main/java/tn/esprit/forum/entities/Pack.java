package tn.esprit.forum.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import tn.esprit.forum.entities.Enum.TypePack;

import java.util.List;
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Pack {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    Long idPack;
    @Enumerated(EnumType.STRING)
    TypePack typePack;
    double montant;
    String description;
    int nbPlace;

    @OneToMany(mappedBy = "pack")
    List<Reservation> reservations;
    @OneToMany
    List<Stand> stands;

}

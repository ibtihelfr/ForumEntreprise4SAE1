package tn.esprit.forum.entities;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import tn.esprit.forum.entities.Enum.EtatCondidature;

import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Condidature {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    Long idCondidature;
    EtatCondidature etatCondidature;
    String coverLetter;
    @ManyToOne(cascade = CascadeType.ALL)
    Entretien entretien;

    @ManyToMany(mappedBy = "condidatures")
    List<Offre> offres;


}

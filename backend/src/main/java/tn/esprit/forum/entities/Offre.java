package tn.esprit.forum.entities;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import tn.esprit.forum.entities.Enum.TypeOffre;

import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Offre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    Long idOffre;
    String Description;
    @Enumerated(EnumType.STRING)
    TypeOffre typeOffre;
    String experience;
    Date dateCreation;
    String lieu;
    Boolean validite;

    @ManyToOne(cascade = CascadeType.ALL)
    User user;
    @ManyToMany
    List<Condidature> condidatures;

    @OneToMany(mappedBy = "offre")
    List<Review> reviews;

}

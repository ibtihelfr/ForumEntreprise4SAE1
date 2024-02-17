package tn.esprit.forum.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.forum.entities.Offre;
import tn.esprit.forum.entities.User;

public interface OffreRepository extends JpaRepository<Offre,Long> {
}

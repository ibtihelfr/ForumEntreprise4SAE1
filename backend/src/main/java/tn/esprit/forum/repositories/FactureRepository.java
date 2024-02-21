package tn.esprit.forum.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.forum.entities.FactureReservation;

public interface FactureRepository extends JpaRepository<FactureReservation,Long> {
}

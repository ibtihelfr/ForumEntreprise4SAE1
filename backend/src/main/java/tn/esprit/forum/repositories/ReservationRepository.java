package tn.esprit.forum.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.forum.entities.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation,Long> {
}

package tn.esprit.forum.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.forum.entities.Stand;

public interface StandRepository extends JpaRepository<Stand,Long> {
}

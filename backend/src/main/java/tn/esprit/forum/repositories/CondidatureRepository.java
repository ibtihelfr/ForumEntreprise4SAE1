package tn.esprit.forum.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.forum.entities.Condidature;
import tn.esprit.forum.entities.User;

import java.util.List;

public interface CondidatureRepository extends JpaRepository<Condidature,Long> {

}

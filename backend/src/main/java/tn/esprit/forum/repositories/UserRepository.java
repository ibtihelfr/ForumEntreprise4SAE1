package tn.esprit.forum.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.forum.entities.User;

public interface UserRepository extends JpaRepository<User,Long> {
}

package tn.esprit.forum.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.forum.entities.Announcement;
import tn.esprit.forum.entities.User;

import java.util.List;

public interface UserRepository extends JpaRepository<User,Long> {

}

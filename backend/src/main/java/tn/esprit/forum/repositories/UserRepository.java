package tn.esprit.forum.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.forum.dto.SignupRequestDTo;
import tn.esprit.forum.dto.UserDto;
import tn.esprit.forum.entities.User;

import java.util.Optional;


public interface UserRepository extends JpaRepository<User, Long> {
        Optional<User> findByEmail(String email);
    }







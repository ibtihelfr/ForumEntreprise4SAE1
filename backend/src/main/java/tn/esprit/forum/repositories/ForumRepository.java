package tn.esprit.forum.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import tn.esprit.forum.entities.Forum;
import tn.esprit.forum.entities.User;

import java.time.LocalDate;
import java.util.Date;

public interface ForumRepository extends JpaRepository<Forum,Long> {
    Forum findFirstByDateForumAfterOrderByDateForumAsc(LocalDate currentDate);
}

package tn.esprit.forum.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.forum.entities.Announcement;

public interface AnnouncementRepository extends JpaRepository<Announcement,Long> {
}

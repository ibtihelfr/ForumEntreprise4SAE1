package tn.esprit.forum.services;

import tn.esprit.forum.entities.Announcement;

import java.util.List;

public interface AnnouncementService {
    //Announcement ajouterParticipant(Announcement a);
    Announcement updateAnnouncement(Announcement announcement);
    List<Announcement> findAll();
    Announcement findById (long numAnnouncement);
    void delete (long numAnnouncement);
    //List<Announcement> recommendBestAnnouncements(String type, int quantity) ;
    public Announcement addAnnouncement(Announcement announcement, Long typeId) ;
     List<Announcement> getAnnouncementsByType(Long typeId) ;
    //List<Announcement> filterAndRecommend(List<Announcement> announcements, int requiredSupply);
    public List<Announcement> recommendAnnouncements(int requiredSupply);

    }

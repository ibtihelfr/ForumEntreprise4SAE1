package tn.esprit.forum.services.Imp;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.forum.entities.Announcement;
import tn.esprit.forum.entities.TypeAnnonce;
import tn.esprit.forum.repositories.AnnouncementRepository;
import tn.esprit.forum.repositories.TypeAnnoceRepository;
import tn.esprit.forum.services.AnnouncementService;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AnnouncementServiceImp implements AnnouncementService {
    public final AnnouncementRepository announcementRepository;
    private final TypeAnnoceRepository typeAnnoceRepository;

//    @Override
//    public Announcement ajouterParticipant(Announcement a) {
//        return announcementRepository.save(a);
//    }

    @Override
    public Announcement updateAnnouncement(Announcement announcement) {
        return announcementRepository.save(announcement);
    }

    @Override
    public List<Announcement> findAll() {
        return (List<Announcement>)announcementRepository.findAll();
    }

    @Override
    public Announcement findById(long numAnnouncement) {
        return announcementRepository.findById(numAnnouncement).orElse(null);
    }

    @Override
    public void delete(long numAnnouncement) {
        announcementRepository.deleteById(numAnnouncement );

    }

//    @Override
//    public List<Announcement> recommendBestAnnouncements(String type, int quantity) {
//        // Retrieve all announcements for the given type
//        List<Announcement> announcements = announcementRepository.findByTypeAnnonceLibelle(type);
//
//        // Calculate score for each announcement based on article price/quantity ratio
//        for (Announcement announcement : announcements) {
//            double pricePerUnit = announcement.getArticlePrice() / announcement.getQuantity();
//            announcement.setScore(pricePerUnit);
//        }
//
//        // Sort announcements by score (ascending order)
//        List<Announcement> sortedAnnouncements = announcements.stream()
//                .sorted(Comparator.comparingDouble(Announcement::getScore))
//                .collect(Collectors.toList());
//
//        // Filter announcements based on the requested quantity
//        List<Announcement> recommendedAnnouncements = sortedAnnouncements.stream()
//                .filter(announcement -> announcement.getQuantity() >= quantity)
//                .collect(Collectors.toList());
//
//        return recommendedAnnouncements;
//    }
    @Override
    public Announcement addAnnouncement(Announcement announcement, Long typeId) {
        TypeAnnonce typeAnnonce = typeAnnoceRepository.findById(typeId).orElseThrow(() -> new IllegalArgumentException("TypeAnnonce with ID " + typeId + " not found"));
        announcement.setTypeAnnonce(typeAnnonce);
        return announcementRepository.save(announcement);
    }
    public List<Announcement> getAnnouncementsByType(Long typeId) {
        return announcementRepository.findByTypeAnnonceIdType(typeId);
    }



    public List<Announcement> recommendAnnouncements(int requiredSupply) {
        List<Announcement> announcements = announcementRepository.findAll();
        return filterAndRecommend(announcements, requiredSupply);
    }


    private List<Announcement> filterAndRecommend(List<Announcement> announcements, int requiredSupply) {
        // Filter announcements based on required supply
        List<Announcement> filteredAnnouncements = announcements.stream()
                .filter(announcement -> announcement.getQuantity() >= requiredSupply)
                .collect(Collectors.toList());

        // Sort filtered announcements by price per item (cheapest to most expensive)
        filteredAnnouncements.sort(Comparator.comparingDouble(this::calculatePricePerItem));

        return filteredAnnouncements;
    }

    private double calculatePricePerItem(Announcement announcement) {
        // Calculate price per item (price/quantity)
        if (announcement.getQuantity() != 0) {
            return announcement.getArticlePrice() / announcement.getQuantity();
        }
        // Return a large value if quantity is zero to ensure it's placed at the end of the sorted list
        return Double.MAX_VALUE;
    }
    }




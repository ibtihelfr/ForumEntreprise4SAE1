package tn.esprit.forum.controllers;

import jakarta.websocket.server.PathParam;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.forum.entities.Announcement;
import tn.esprit.forum.services.AnnouncementService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("announcement")
public class AnnouncementController {
    private final AnnouncementService announcementService;
//    @PostMapping("add")
//    public Announcement AddAnnouncement(@RequestBody Announcement announcment) {
//        announcementService.ajouterParticipant(announcment);
//        return announcment;
//    }
    @GetMapping("findall")
    public List<Announcement> findAll(){
        return announcementService.findAll() ;
    }

    @GetMapping("findbyid/{idann}")
    public Announcement FindById(@PathVariable int idann){
        return announcementService. findById(idann);
    }

    @PutMapping
    public Announcement update (@RequestBody  Announcement announcement){
        return announcementService.updateAnnouncement(announcement);
    }
    @DeleteMapping("/{idann}")
    public void delete(@PathVariable long idann) {
        announcementService.delete(idann);
    }
    @GetMapping("/recommendations/{type}/{quantity}")
    public List<Announcement> getRecommendedAnnouncements(
            @PathVariable String type,
            @PathVariable int quantity) {
        return announcementService.recommendBestAnnouncements(type, quantity);
    }

    @PostMapping("add/{typeId}")
    public Announcement addAnnouncement(@RequestBody Announcement announcement, @PathVariable long typeId) {
        Announcement addedAnnouncement = announcementService.addAnnouncement(announcement, typeId);
        return addedAnnouncement;
    }

    @GetMapping("/byType/{typeId}")
    public List<Announcement> getAnnouncementsByType(@PathVariable("typeId") Long typeId) {
        List<Announcement> announcements = announcementService.getAnnouncementsByType(typeId);
        return announcements;
    }

}

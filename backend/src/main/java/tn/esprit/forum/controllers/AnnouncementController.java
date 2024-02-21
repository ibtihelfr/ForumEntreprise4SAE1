package tn.esprit.forum.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.esprit.forum.entities.Announcement;
import tn.esprit.forum.services.AnnouncementService;

@RestController
@RequiredArgsConstructor
@RequestMapping("announcement")
public class AnnouncementController {
    private final AnnouncementService announcementService;

}

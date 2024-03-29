package tn.esprit.forum.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.esprit.forum.services.ForumService;

@RestController
@RequiredArgsConstructor
@RequestMapping("forum")
public class ForumController {
    private final ForumService forumService;
}

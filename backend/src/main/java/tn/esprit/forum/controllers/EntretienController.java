package tn.esprit.forum.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.esprit.forum.services.EntretienService;

@RestController
@RequiredArgsConstructor
@RequestMapping("entretien")
public class EntretienController {
    private final EntretienService entretienService;
}

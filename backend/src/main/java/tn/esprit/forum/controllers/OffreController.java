package tn.esprit.forum.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.esprit.forum.services.OffreService;
@RestController
@RequiredArgsConstructor
@RequestMapping("offre")
public class OffreController {
    private final OffreService offreService;
}

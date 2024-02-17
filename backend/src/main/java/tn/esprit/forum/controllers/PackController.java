package tn.esprit.forum.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.esprit.forum.services.PackService;
@RestController
@RequiredArgsConstructor
@RequestMapping("pack")
public class PackController {
    private final PackService packService;
}

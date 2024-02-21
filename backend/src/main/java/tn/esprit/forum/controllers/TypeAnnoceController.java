package tn.esprit.forum.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.esprit.forum.services.TypeAnnoceService;

@RestController
@RequiredArgsConstructor
@RequestMapping("announcement/type")
public class TypeAnnoceController {
    private final TypeAnnoceService typeAnnoceService;
}

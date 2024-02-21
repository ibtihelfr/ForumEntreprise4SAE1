package tn.esprit.forum.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.esprit.forum.services.StandService;

@RestController
@RequiredArgsConstructor
@RequestMapping("stand")
public class StandController {
    private final StandService standService;
}

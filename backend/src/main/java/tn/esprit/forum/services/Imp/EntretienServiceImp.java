package tn.esprit.forum.services.Imp;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.forum.repositories.EntretienRepository;
import tn.esprit.forum.services.EntretienService;
@Service
@RequiredArgsConstructor
public class EntretienServiceImp implements EntretienService {
    private final EntretienRepository entretienRepository;
}

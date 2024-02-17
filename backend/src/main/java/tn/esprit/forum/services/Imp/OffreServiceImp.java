package tn.esprit.forum.services.Imp;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.forum.repositories.OffreRepository;
import tn.esprit.forum.services.OffreService;

@Service
@RequiredArgsConstructor
public class OffreServiceImp implements OffreService {
    private final OffreRepository offreRepository;
}

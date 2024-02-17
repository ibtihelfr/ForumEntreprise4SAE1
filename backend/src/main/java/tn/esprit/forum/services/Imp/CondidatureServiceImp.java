package tn.esprit.forum.services.Imp;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.forum.repositories.CondidatureRepository;
import tn.esprit.forum.services.CondidatureService;
@Service
@RequiredArgsConstructor
public class CondidatureServiceImp implements CondidatureService {
    private final CondidatureRepository condidatureRepository;
}

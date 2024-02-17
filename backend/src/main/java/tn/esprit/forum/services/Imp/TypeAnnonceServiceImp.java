package tn.esprit.forum.services.Imp;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.forum.repositories.TypeAnnoceRepository;
import tn.esprit.forum.services.TypeAnnoceService;
@Service
@RequiredArgsConstructor
public class TypeAnnonceServiceImp implements TypeAnnoceService {
    private final TypeAnnoceRepository typeAnnoceRepository;
}

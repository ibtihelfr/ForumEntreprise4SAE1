package tn.esprit.forum.services.Imp;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.forum.repositories.PackRepository;
import tn.esprit.forum.services.PackService;

@Service
@RequiredArgsConstructor
public class PackServiceImp implements PackService {
    private final PackRepository packRepository;
}

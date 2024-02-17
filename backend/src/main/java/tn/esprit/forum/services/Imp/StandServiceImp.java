package tn.esprit.forum.services.Imp;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.forum.repositories.StandRepository;
import tn.esprit.forum.services.StandService;

@Service
@RequiredArgsConstructor
public class StandServiceImp implements StandService {
    private final StandRepository standRepository;
}

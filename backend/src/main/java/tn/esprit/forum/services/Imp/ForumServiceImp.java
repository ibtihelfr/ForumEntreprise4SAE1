package tn.esprit.forum.services.Imp;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.forum.repositories.ForumRepository;
import tn.esprit.forum.services.FactureService;
import tn.esprit.forum.services.ForumService;

@Service
@RequiredArgsConstructor
public class ForumServiceImp implements ForumService {
    private final ForumRepository forumRepository;
}

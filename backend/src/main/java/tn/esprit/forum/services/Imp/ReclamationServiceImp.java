package tn.esprit.forum.services.Imp;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.forum.entities.Reclamation;
import tn.esprit.forum.repositories.ReclamationRepository;
import tn.esprit.forum.services.ReclamationService;
import java.util.List;
import java.util.Optional;
@Service
@RequiredArgsConstructor
public class ReclamationServiceImp implements ReclamationService {
    private final ReclamationRepository reclamationRepository;

    @Override
    public Reclamation addReclamation(Reclamation reclamation) {
        return reclamationRepository.save(reclamation);
    }

    @Override
    public void deleteReclamation(Long idReclamation) {
        reclamationRepository.deleteById(idReclamation);
        ;
    }

    @Override
    public List<Reclamation> getAllReclamations() {
        return (List<Reclamation>) reclamationRepository.findAll();
    }

    @Override
    public Reclamation updateReclamation(Reclamation reclamation) {
        return reclamationRepository.save(reclamation);
    }

    public Optional<Reclamation> getReclamationById(Long idReclamation) {
        return reclamationRepository.findById(idReclamation);
    }
}

package tn.esprit.forum.services;

import tn.esprit.forum.entities.Reclamation;

import java.util.List;
import java.util.Optional;

public interface ReclamationService {

    public Reclamation addReclamation(Reclamation reclamation);

    void deleteReclamation(Long idReclamation);

    List<Reclamation> getAllReclamations();

    Reclamation updateReclamation(Reclamation reclamation);


    Optional<Reclamation> getReclamationById(Long idReclamation);
}

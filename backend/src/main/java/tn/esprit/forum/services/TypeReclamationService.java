package tn.esprit.forum.services;
import tn.esprit.forum.entities.TypeReclamation;
import tn.esprit.forum.repositories.TypeReclamationRepository;
import java.util.List;
import java.util.Optional;
public interface TypeReclamationService {
    public TypeReclamation addTRec(TypeReclamation typeReclamation);

    void deleteTRec(Long idType);

    List<TypeReclamation> getAllTypeReclamation();

    TypeReclamation updateTRec(TypeReclamation typeReclamation);
}

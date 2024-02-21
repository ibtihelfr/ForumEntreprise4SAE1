package tn.esprit.forum.services.Imp;
import tn.esprit.forum.entities.TypeReclamation;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.forum.repositories.TypeReclamationRepository;
import tn.esprit.forum.services.TypeReclamationService;
import java.util.List;
import java.util.Optional;
@Service
@RequiredArgsConstructor
public class TypeReclamationServiceImp implements TypeReclamationService {
    private final TypeReclamationRepository typeReclamationRepository;

    @Override
    public TypeReclamation addTRec(TypeReclamation typeReclamation) {
        return typeReclamationRepository.save(typeReclamation);
    }

    @Override
    public void deleteTRec(Long idType) {
        typeReclamationRepository.deleteById(idType);
    }

    @Override
    public List<TypeReclamation> getAllTypeReclamation() { return (List<TypeReclamation>) typeReclamationRepository.findAll();}

    @Override
    public TypeReclamation updateTRec(TypeReclamation typeReclamation) {
        return typeReclamationRepository.save(typeReclamation);
    }
}

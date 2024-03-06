package tn.esprit.forum.services.Imp;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.forum.entities.ComposantPack;
import tn.esprit.forum.services.ComposantPackService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ComposantPackServiceImp implements ComposantPackService {
    @Override
    public ComposantPack ajouterComposantType(ComposantPack com) {
        return null;
    }

    @Override
    public ComposantPack updateComposantPack(ComposantPack announcement) {
        return null;
    }

    @Override
    public List<ComposantPack> findAll() {
        return null;
    }

    @Override
    public ComposantPack findById(long numComposantPack) {
        return null;
    }

    @Override
    public void delete(long numComposantPack) {

    }
}

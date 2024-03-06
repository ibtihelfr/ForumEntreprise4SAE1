package tn.esprit.forum.services;

import tn.esprit.forum.entities.ComposantPack;
import tn.esprit.forum.services.ComposantPackService;

import java.util.List;

public interface ComposantPackService {
    ComposantPack ajouterComposantType(ComposantPack com);

    ComposantPack updateComposantPack(ComposantPack announcement);
    List<ComposantPack> findAll();
    ComposantPack findById (long numComposantPack);
    void delete (long numComposantPack);
}

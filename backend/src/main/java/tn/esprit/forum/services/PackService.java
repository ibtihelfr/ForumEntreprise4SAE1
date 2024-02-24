package tn.esprit.forum.services;

import tn.esprit.forum.entities.Pack;

import java.util.List;

public interface PackService {
    Pack addPack(Pack pack);

    Pack updatePack(Pack pack,Long id);

    List<Pack> getAllPack();

    Pack findById(Long id);

    void deletePack(Long id);
}

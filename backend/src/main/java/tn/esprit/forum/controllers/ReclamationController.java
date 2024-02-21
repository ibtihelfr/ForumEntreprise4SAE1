package tn.esprit.forum.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.forum.entities.Reclamation;
import tn.esprit.forum.services.ReclamationService;

import java.util.List;
import java.util.Optional;
@RestController
@RequiredArgsConstructor
@RequestMapping("reclamation")
public class ReclamationController {
    private final ReclamationService reclamationService;


    @PostMapping("/addReclamation")
    public Reclamation addReclamation(@RequestBody Reclamation reclamation) {
        return reclamationService.addReclamation(reclamation);
    }

    @DeleteMapping("/deleteReclamation/{idReclamation}")
    public void deleteReclamation(@PathVariable("idReclamation") Long idReclamation) {
        reclamationService.deleteReclamation(idReclamation);
    }

    @GetMapping("/allReclamation")
    List<Reclamation> reclamations(){
        return reclamationService.getAllReclamations();
    }

    @PutMapping ("/updateReclamation")
    Reclamation updateReclamation(@RequestBody Reclamation reclamation){
        return reclamationService.updateReclamation(reclamation);
    }

    @GetMapping ("/{idReclamation}")
    public ResponseEntity<Reclamation> getReclamationById(@PathVariable Long idReclamation) {
        Optional<Reclamation> reclamation = reclamationService.getReclamationById(idReclamation);
        return reclamation.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }
}

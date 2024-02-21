package tn.esprit.forum.controllers;
import org.springframework.web.bind.annotation.*;
import tn.esprit.forum.entities.Reclamation;
import tn.esprit.forum.entities.TypeReclamation;
import lombok.RequiredArgsConstructor;
import tn.esprit.forum.services.TypeReclamationService;
import java.util.List;
@RestController
@RequiredArgsConstructor
@RequestMapping("reclamation/type")
public class TypeReclamationController {
    private final TypeReclamationService typeReclamationService;

    @PostMapping("/addTypeReclamation")
    public TypeReclamation addTRec(@RequestBody TypeReclamation typeReclamation) {
        return typeReclamationService.addTRec(typeReclamation);
    }


    @DeleteMapping("/deleteTRec/{idType}")
    public void deleteTRec(@PathVariable("idType")  Long idType) {
        typeReclamationService.deleteTRec(idType);
    }

    @GetMapping ("/allTypeReclamation")
    List<TypeReclamation> typeReclamations(){
        return typeReclamationService.getAllTypeReclamation();
    }


    @PutMapping ("/updateTypeReclamation")
    TypeReclamation updateTRec(@RequestBody TypeReclamation typeReclamation){
        return typeReclamationService.updateTRec(typeReclamation);
    }
}

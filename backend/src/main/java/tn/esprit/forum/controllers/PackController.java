package tn.esprit.forum.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.forum.entities.Pack;
import tn.esprit.forum.services.PackService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("pack")
public class PackController {
    private final PackService packService;

    @PostMapping("/add")
    void addPack(@RequestBody Pack pack){
        packService.addPack(pack);
    }
    @PutMapping("/update/{idPack}")
    void updatePack(@RequestBody Pack pack,@PathVariable("idPack")Long id)
    {
        packService.updatePack(pack,id);
    }
    @DeleteMapping("/delete/{idPack}")
    void deletePack(@PathVariable("idPack")Long id){
        packService.deletePack(id);
    }
    @GetMapping("/all")
    List<Pack> readAll(){
        return packService.getAllPack();
    }

}

package com.example.demo.controller;
import com.example.demo.Service.*;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entity.*;
import java.util.ArrayList;
import java.util.List;

import com.example.demo.Model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/Mechanic")  // This makes all mappings start with "/employees"
public class MechanicController {

    @Autowired
    MechanicService mechanicService;

    @GetMapping
    public List<Mechanic> getAllMechanics() {
        return mechanicService.readMechanics();
    }

    @GetMapping("/{id}")
    public Mechanic getMechanicById(@PathVariable Long id) {
        return mechanicService.readMechanic(id);
    }
    
    @GetMapping("/by-location")
    public Mechanic getMechanicByLocation(@RequestParam String location){
        return mechanicService.readMechanic1(location);
    }
    @PostMapping
    public String createMechanic(@RequestBody Mechanic mechanic) {
        return mechanicService.createMechanic(mechanic);
    }

    @DeleteMapping("/{id}")
    public String deleteEmployee(@PathVariable Long id){
        return mechanicService.deleteMechanic(id) ? "Deleted Successfully" : "Not found";
    }
    

    @PutMapping("/{id}")
    public String updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        return mechanicService.updateMechanic(id, new Mechanic());
    }
}

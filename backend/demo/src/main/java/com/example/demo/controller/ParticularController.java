package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Particular;
import com.example.demo.Service.ParticularService;
import com.example.demo.entity.ParticularEntity;

@RestController
@RequestMapping("/particular")
@CrossOrigin(origins="http://localhost:5173")
public class ParticularController {
    
   @Autowired
   private ParticularService service;

   @GetMapping("/{email}")
   public ParticularEntity getData(@PathVariable String email){
    ParticularEntity j= service.getit(email);
    return  j;
   }

}

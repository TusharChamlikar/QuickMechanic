package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.DataService;
import com.example.demo.entity.DataEntity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@CrossOrigin(origins="*")
@RequestMapping("/Search")
public class DataController {
    
    @Autowired
    DataService dataService;

    @GetMapping
    public List<DataEntity> getMethod() {
        return dataService.readData();
    }

    @PostMapping
    public String postMethodName(@RequestBody DataEntity data) {
        
        return dataService.saverecord(data);
    }
    
    
}

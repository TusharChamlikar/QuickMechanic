package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Particular;
import com.example.demo.entity.ParticularEntity;
import com.example.demo.repository.ParticularRepository;

@Service
public class ParticularService {
    

    @Autowired
    private ParticularRepository repo;

    public ParticularEntity getit(String email){
        return repo.findByEmail(email);
    }
}

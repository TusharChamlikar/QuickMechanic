package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Particular;
import com.example.demo.entity.ParticularEntity;

@Repository
public interface ParticularRepository  extends JpaRepository<ParticularEntity,Integer>{

    ParticularEntity findByEmail(String email);
    
}

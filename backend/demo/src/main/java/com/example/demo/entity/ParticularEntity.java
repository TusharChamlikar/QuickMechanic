package com.example.demo.entity;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="Mechanic_data")
public class ParticularEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String phone;
    private String email;
    private String location;
    private int experience;
}

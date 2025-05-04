package com.example.demo.entity;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="Mechanic_data")
public class DataEntity {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String password;

}

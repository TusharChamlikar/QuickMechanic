package com.example.demo.Model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Mechanic {
    private Long id;
    private String name;
    private String phone;
    private String email;
    private String location;
    private int experience;
}

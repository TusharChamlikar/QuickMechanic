package com.example.demo.Service;
import com.example.demo.Model.*;
import java.util.*;
public interface MechanicService {
    String createMechanic(Mechanic mechanic);
    List<Mechanic> readMechanics();
    boolean deleteMechanic(Long id);
    String updateMechanic(Long id, Mechanic employee);
    Mechanic readMechanic(Long id);
    Mechanic readMechanic1(String location);

}


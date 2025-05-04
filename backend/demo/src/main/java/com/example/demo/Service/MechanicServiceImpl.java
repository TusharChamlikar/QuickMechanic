package com.example.demo.Service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import com.example.demo.entity.*;
import com.example.demo.Model.*;
import com.example.demo.repository.*;

@Service
public class MechanicServiceImpl implements MechanicService{

    @Autowired
    private MechanicRepository employeeRepository;

    //List<Employee> employees= new ArrayList<>();

    @Override
    public String createMechanic(Mechanic employee) {
        MechanicEntity employeeEntity = new MechanicEntity();
        BeanUtils.copyProperties(employee, employeeEntity);

        employeeRepository.save(employeeEntity);
       // employees.add(employee);
        return "Saved Successfully";
    }

    @Override
    public Mechanic readMechanic(Long id) {
        MechanicEntity employeeEntity = employeeRepository.findById(id).get();

        Mechanic employee = new Mechanic();
        BeanUtils.copyProperties(employeeEntity,employee);

        return employee;
    }

    @Override
    public List<Mechanic> readMechanics() {
        List<MechanicEntity> employeesList =employeeRepository.findAll();
        List<Mechanic> employees= new ArrayList<>();
   //    for(int i=0;i<employeesList.size();i++){
        for (MechanicEntity employeeEntity : employeesList) {
            
            Mechanic emp = new Mechanic();
            emp.setId(employeeEntity.getId());
            emp.setName(employeeEntity.getName());
            emp.setEmail(employeeEntity.getEmail());
            emp.setPhone(employeeEntity.getPhone());
            emp.setLocation(employeeEntity.getLocation());
            emp.setExperience(employeeEntity.getExperience());
            employees.add(emp);
        }
        return employees;
    }

    @Override
    public boolean deleteMechanic(Long id) {
        MechanicEntity emp = employeeRepository.findById(id).get();
        employeeRepository.delete(emp);
        return true;
    }

    @Override
    public String updateMechanic(Long id, Mechanic employee) {
        MechanicEntity exestingEmployee = employeeRepository.findById(id).get();
        
        exestingEmployee.setEmail(employee.getEmail());
        exestingEmployee.setName(employee.getName());
        exestingEmployee.setPhone(employee.getPhone());

        employeeRepository.save(exestingEmployee);
        return "Update Succesfully";
    }
    @Override
    public Mechanic readMechanic1(String location) {
        List<MechanicEntity> mechanicEntities = employeeRepository.findByLocation(location);
        
        if (mechanicEntities.isEmpty()) {
            throw new RuntimeException("No mechanic found at location: " + location);
        }
    
        MechanicEntity mechanicEntity = mechanicEntities.get(0); // Get the first mechanic
    
        Mechanic mechanic = new Mechanic();
        BeanUtils.copyProperties(mechanicEntity, mechanic);
    
        return mechanic;
    }
    

 

}
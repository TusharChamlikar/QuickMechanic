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
@RequestMapping("/employees")  // This makes all mappings start with "/employees"
public class EmpController {

    @Autowired
    EmployeeSerivce employeeSerivce;

    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeSerivce.readEmployees();
    }

    @GetMapping("/{id}")
    public Employee getEmployeeById(@PathVariable Long id) {
        return employeeSerivce.readEmployee(id);
    }

    @PostMapping
    public String createEmployee(@RequestBody Employee employee) {
        return employeeSerivce.createEmployee(employee);
    }

    @DeleteMapping("/{id}")
    public String deleteEmployee(@PathVariable Long id){
        return employeeSerivce.deleteEmployee(id) ? "Deleted Successfully" : "Not found";
    }

    @PutMapping("/{id}")
    public String updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        return employeeSerivce.updateEmployee(id, employee);
    }
}

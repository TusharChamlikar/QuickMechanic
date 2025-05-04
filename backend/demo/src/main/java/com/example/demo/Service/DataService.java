package com.example.demo.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.DataEntity;
@Service
public interface DataService {
    List<DataEntity> readData();
    String saverecord(DataEntity d);
    
}

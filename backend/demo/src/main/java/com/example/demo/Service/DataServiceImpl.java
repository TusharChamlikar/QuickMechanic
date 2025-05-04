package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.DataEntity;
import com.example.demo.repository.DataRepository;

@Service
public class DataServiceImpl implements DataService {

    @Autowired
    private DataRepository dataRepository;

    @Override
    public List<DataEntity> readData() {
        return dataRepository.findAll();
    }

    @Override
    public String saverecord(DataEntity d) {
        dataRepository.save(d);
        return "Record saved successfully!";
    }
}

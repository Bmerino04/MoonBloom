package com.moonbloom.backend.service;

import com.moonbloom.backend.repository.CycleDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CyclePredictionService {
    @Autowired
    private CycleDataRepository cycleDataRepository;
    
}

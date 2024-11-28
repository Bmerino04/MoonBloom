package com.moonbloom.backend.services;

import com.moonbloom.backend.repositories.CycleDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StatisticsService {
    @Autowired
    private CycleDataRepository cycleDataRepository;

    @Autowired
    private CyclePredictionService cyclePredictionService;
}

package com.moonbloom.backend.services;

import com.moonbloom.backend.entities.Cycle;
import com.moonbloom.backend.repositories.CycleDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class CyclePredictionService {
    @Autowired
    private CycleDataRepository cycleDataRepository;
    public Map<String, Object> predictCycleDetails(Long userId) {
        List<Cycle> cycles = cycleDataRepository.findByUserId(userId);

        double avgCycleLength = calculateAverageCycleLength(cycles);
        double avgMenstrualPhaseDuration = calculateAverageMenstrualPhaseDuration(cycles);
        int avgDayOfOvulation = calculateAverageDayOfOvulation(avgCycleLength);

        return null;
    }

    private double calculateAverageCycleLength(List<Cycle> cycles) {
        return 0;
    }
    private double calculateAverageMenstrualPhaseDuration(List<Cycle> cycles) {
        return 0;
    }
    private int calculateAverageDayOfOvulation(double avgCycleLength) {
        return 0;
    }

}

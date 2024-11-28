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
        if (cycles.isEmpty()) {
            throw new IllegalArgumentException("No hay ciclos registrados para este usuario.");
        }
        double avgCycleLength = predictCycleLength(cycles);
        double avgMenstrualPhaseDuration = predictPeriodLength(cycles);
        int avgDayOfOvulation = predictOvulationDay(avgCycleLength);

        return null;
    }

    private double predictCycleLength(List<Cycle> cycles) {
        return (int) cycles.stream()
                .mapToInt(Cycle::getCycleLength)
                .average()
                .orElseThrow(() -> new IllegalStateException("Error al calcular la duración promedio del ciclo."));
    }
    private double predictPeriodLength(List<Cycle> cycles) {
        return (int) cycles.stream()
                .mapToInt(Cycle::getPeriodDuration)
                .average()
                .orElseThrow(() -> new IllegalStateException("Error al calcular la duración promedio del periodo."));
    }
    private int predictOvulationDay(double avgCycleLength) {

        return 0;
    }

}

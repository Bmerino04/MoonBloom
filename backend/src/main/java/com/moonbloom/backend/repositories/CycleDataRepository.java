package com.moonbloom.backend.repositories;

import com.moonbloom.backend.entities.Cycle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface CycleDataRepository extends JpaRepository<Cycle, Long> {
    List<Cycle> findByUserId(Long userId);
    Cycle findTopByUser_UserIdOrderByLastPeriodDateDesc(int userId);
    List<Cycle> findByLastPeriodDateBetween(LocalDate startDate, LocalDate endDate);
}


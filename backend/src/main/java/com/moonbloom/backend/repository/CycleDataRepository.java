package com.moonbloom.backend.repository;

import com.moonbloom.backend.entities.Cycle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CycleDataRepository extends JpaRepository<Cycle, Long> {
    
}

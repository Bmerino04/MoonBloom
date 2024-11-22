package com.moonbloom.backend.entities;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Cycle implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int cycleId;

    private int periodDuration;

    private LocalDate lastPeriodDate;

    private int cycleLength;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false) // Relación N:1 con User
    private User user;

    @OneToMany(mappedBy = "cycle", cascade = CascadeType.ALL, orphanRemoval = true) // Relación 1:N con SexualActivityRecord
    private List<SexualActivityRecord> sexualActivityRecords;

    // Getters y setters
    public int getCycleId() {
        return cycleId;
    }

    public void setCycleId(int cycleId) {
        this.cycleId = cycleId;
    }

    public int getPeriodDuration() {
        return periodDuration;
    }

    public void setPeriodDuration(int periodDuration) {
        this.periodDuration = periodDuration;
    }

    public LocalDate getLastPeriodDate() {
        return lastPeriodDate;
    }

    public void setLastPeriodDate(LocalDate lastPeriodDate) {
        this.lastPeriodDate = lastPeriodDate;
    }

    public int getCycleLength() {
        return cycleLength;
    }

    public void setCycleLength(int cycleLength) {
        this.cycleLength = cycleLength;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<SexualActivityRecord> getSexualActivityRecords() {
        return sexualActivityRecords;
    }

    public void setSexualActivityRecords(List<SexualActivityRecord> sexualActivityRecords) {
        this.sexualActivityRecords = sexualActivityRecords;
    }
}

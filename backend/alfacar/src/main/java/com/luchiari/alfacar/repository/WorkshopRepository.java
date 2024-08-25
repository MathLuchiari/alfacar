package com.luchiari.alfacar.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.luchiari.alfacar.model.Workshop;

@Repository
public interface WorkshopRepository extends JpaRepository<Workshop, Long> {
    
}
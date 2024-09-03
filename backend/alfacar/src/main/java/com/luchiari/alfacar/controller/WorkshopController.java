package com.luchiari.alfacar.controller;

import org.springframework.web.bind.annotation.RestController;

import com.luchiari.alfacar.dto.WorkshopDTO;
import com.luchiari.alfacar.dto.WorkshopPageDTO;
import com.luchiari.alfacar.service.WorkshopService;

import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@Validated
@RestController
// @CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/workshops")
public class WorkshopController {
    
    private final WorkshopService workshopService;

    public WorkshopController(
        WorkshopService workshopService
    ) {
        this.workshopService = workshopService;
    }

    @GetMapping
    public WorkshopPageDTO get(
        @RequestParam(defaultValue = "0") @PositiveOrZero int pageNumber, 
        @RequestParam(defaultValue = "100") @Positive @Max(100) int pageSize 
    ) {
        return workshopService.list(pageNumber, pageSize);
    }

    @GetMapping("/{id}")
    public WorkshopDTO getById( @PathVariable @NotNull @Positive Long id ) {
        return workshopService.findById(id);
    }

    @PostMapping
    @ResponseStatus( HttpStatus.CREATED )
    public WorkshopDTO create(@RequestBody @Valid WorkshopDTO workshop) {
        return workshopService.create(workshop);
    }
    
    @PutMapping("/{id}")
    public WorkshopDTO update(
        @PathVariable @NotNull @Positive Long id,
        @RequestBody @Valid WorkshopDTO workshop
        ) {
        return workshopService.update(id, workshop);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable @NotNull @Positive Long id) {
        workshopService.delete(id);
    }
}

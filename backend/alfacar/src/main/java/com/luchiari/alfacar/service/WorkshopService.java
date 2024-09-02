package com.luchiari.alfacar.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import com.luchiari.alfacar.dto.WorkshopDTO;
import com.luchiari.alfacar.dto.WorkshopPageDTO;
import com.luchiari.alfacar.dto.mapper.WorkshopMapper;
import com.luchiari.alfacar.exception.RecordNotFoundException;
import com.luchiari.alfacar.model.Workshop;
import com.luchiari.alfacar.repository.WorkshopRepository;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;

import static java.util.stream.Collectors.*;

@Validated
@Service
public class WorkshopService {
    
    private final WorkshopRepository workshopRepository;
    private final WorkshopMapper workshopMapper;

    public WorkshopService( WorkshopRepository workshopRepository, WorkshopMapper workshopMapper) {
        this.workshopRepository = workshopRepository;
        this.workshopMapper = workshopMapper;
    }

    public WorkshopPageDTO list(
        @PositiveOrZero int pageNumber, 
        @Positive @Max(100) int pageSize
    ) {
        Page<Workshop> pageWorkshop = workshopRepository.findAll(PageRequest.of(pageNumber, pageSize));
        List<WorkshopDTO> listWorkshopDTO = pageWorkshop.get().map(workshopMapper::toDTO).collect(toList());
        return new WorkshopPageDTO(listWorkshopDTO, pageWorkshop.getTotalElements(), pageWorkshop.getTotalPages());
    }

    public WorkshopDTO findById( @NotNull @Positive Long id ) {
        return workshopRepository.findById(id).map(workshopMapper::toDTO).orElseThrow(() -> new RecordNotFoundException(id));
    }

    public WorkshopDTO create( @Valid @NotNull WorkshopDTO workshop ) {
        return workshopMapper.toDTO(workshopRepository.save(workshopMapper.toEntity(workshop)));
    }

    public WorkshopDTO update(
        @NotNull @Positive Long id, 
        @Valid @NotNull WorkshopDTO workshopDTO
    ) {
        return workshopRepository.findById(id)
            .map(recordFound -> {
                recordFound.setCompanyName(workshopDTO.companyName());
                recordFound.setAddress(workshopDTO.address());
                recordFound.setNeighborhood(workshopDTO.neighborhood());
                recordFound.setZipCode(workshopDTO.zipCode());
                recordFound.setCity(workshopDTO.city());
                recordFound.setPhoneNumber(workshopDTO.phoneNumber());
                recordFound.setCellphoneNumber(workshopDTO.cellphoneNumber());
                recordFound.setEmail(workshopDTO.email());
                recordFound.setCompanyRegistrationNumber(workshopDTO.companyRegistrationNumber());

                return workshopMapper.toDTO(workshopRepository.save(recordFound));
            }).orElseThrow(() -> new RecordNotFoundException(id));
    }

    public void delete(@NotNull @Positive Long id) {
        workshopRepository.delete(
            workshopRepository.findById(id).orElseThrow(() -> new RecordNotFoundException(id))
        );
    }
}

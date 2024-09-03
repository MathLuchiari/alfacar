package com.luchiari.alfacar.dto.mapper;

import org.springframework.stereotype.Component;

import com.luchiari.alfacar.dto.WorkshopDTO;
import com.luchiari.alfacar.model.Workshop;

@Component
public class WorkshopMapper {
    public WorkshopDTO toDTO( Workshop workshop ) {
        if (workshop == null) {
            return null;
        }

        return new WorkshopDTO(
            workshop.getId(), 
            workshop.getCompanyName(), 
            workshop.getAddress(), 
            workshop.getNeighborhood(),
            workshop.getZipCode(),
            workshop.getState(),
            workshop.getCity(),
            workshop.getPhoneNumber(),
            workshop.getCellphoneNumber(),
            workshop.getEmail(),
            workshop.getCompanyRegistrationNumber()
        );
    }

    public Workshop toEntity( WorkshopDTO workshopDTO ) {
        if( workshopDTO == null ) {
            return null;
        }

        Workshop workshop = new Workshop();

        workshop.setCompanyName(workshopDTO.companyName());
        workshop.setAddress(workshopDTO.address());
        workshop.setNeighborhood(workshopDTO.neighborhood());
        workshop.setZipCode(workshopDTO.zipCode());
        workshop.setState(workshopDTO.state());
        workshop.setCity(workshopDTO.city());
        workshop.setPhoneNumber(workshopDTO.phoneNumber());
        workshop.setCellphoneNumber(workshopDTO.cellphoneNumber());
        workshop.setEmail(workshopDTO.email());
        workshop.setCompanyRegistrationNumber(workshopDTO.companyRegistrationNumber());

        return workshop;
    }
}

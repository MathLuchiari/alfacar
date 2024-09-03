package com.luchiari.alfacar.dto;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record WorkshopDTO(
    @JsonProperty("_id") Long id,
    @NotBlank @NotNull @Length(min = 1, max = 254) String companyName,
    @NotBlank @NotNull @Length(min = 1, max = 254) String address,
    @NotBlank @NotNull @Length(min = 1, max = 254) String neighborhood,
    @NotBlank @NotNull @Length(min = 8, max = 8)   String zipCode,
    @NotBlank @NotNull @Length(min = 2, max = 2)   String state,
    @NotBlank @NotNull @Length(min = 1, max = 254) String city,
    @NotBlank @NotNull @Length(min = 10, max = 11) String phoneNumber,
    @NotBlank @NotNull @Length(min = 10, max = 11) String cellphoneNumber,
    @NotBlank @NotNull @Length(min = 5, max = 254) String email,
    @NotBlank @NotNull @Length(min = 5, max = 254) String companyRegistrationNumber
) {
    
}

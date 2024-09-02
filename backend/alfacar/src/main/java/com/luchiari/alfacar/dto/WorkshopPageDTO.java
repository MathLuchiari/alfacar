package com.luchiari.alfacar.dto;

import java.util.List;

public record WorkshopPageDTO(
    List<WorkshopDTO> courses,
    long totalElements,
    int totalPages
) {
    
}
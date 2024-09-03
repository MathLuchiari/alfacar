package com.luchiari.alfacar.dto;

import java.util.List;

public record WorkshopPageDTO(
    List<WorkshopDTO> workshops,
    long totalElements,
    int totalPages
) {
    
}
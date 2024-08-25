package com.luchiari.alfacar;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.luchiari.alfacar.model.Workshop;
import com.luchiari.alfacar.repository.WorkshopRepository;

@SpringBootApplication
public class AlfacarApplication {

	public static void main(String[] args) {
		SpringApplication.run(AlfacarApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(WorkshopRepository workshopRepository) {
		return args -> {
			workshopRepository.deleteAll();

			// Workshop w1 = new Workshop();
			// w1.setCompanyName("Luchiari Serviços Automotivos");
			// w1.setAddress("Avenida Guido Aliberti, 5131");
			// w1.setNeighborhood("Mauá");
			// w1.setZipCode("09580400");
			// w1.setCity("São Caetano do Sul");
			// w1.setPhoneNumber("1142382822");
			// w1.setCellphoneNumber("11976956090");
			// w1.setEmail("luchiari.automotivos@gmail.com");
			// w1.setCompanyRegistrationNumber("04453175000105");

			// w1.setCompanyName("Luchiari");
			// w1.setAddress("teste");
			// w1.setNeighborhood("teste");
			// w1.setZipCode("teste");
			// w1.setCity("teste");
			// w1.setPhoneNumber("teste");
			// w1.setCellphoneNumber("teste");
			// w1.setEmail("teste");
			// w1.setCompanyRegistrationNumber("teste");

			// workshopRepository.save(w1);
			System.out.println("Teste Matheus!!");
		};
	}
}

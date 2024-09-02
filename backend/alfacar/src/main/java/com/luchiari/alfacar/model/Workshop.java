package com.luchiari.alfacar.model;

// import java.util.ArrayList;
// import java.util.List;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonProperty;

// import jakarta.annotation.Generated;
// import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
// import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
// import jakarta.persistence.OneToMany;
// import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
// import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

@Entity
public class Workshop {
    @Id
    @GeneratedValue( strategy = GenerationType.AUTO )
    @JsonProperty("_id")
    private Long id;

    @NotBlank
    @NotNull
    @Length(min = 5, max = 254)
    @Column( length = 254, nullable = false )
    private String companyName;
    
    @NotBlank
    @NotNull
    @Length(min = 5, max = 254)
    @Column( length = 254, nullable = false )
    private String address;
    
    @NotBlank
    @NotNull
    @Length(min = 1, max = 254)
    @Column( length = 254, nullable = false )
    private String neighborhood;
    
    @NotBlank
    @NotNull
    @Length(min = 8, max = 8)
    private String zipCode;
    
    @NotBlank
    @NotNull
    @Length(min = 5, max = 254)
    @Column( length = 254, nullable = false )
    private String city;

    @NotBlank
    @NotNull
    @Length(min = 10, max = 11)
    @Column( length = 11, nullable = false )
    private String phoneNumber;
    
    @NotBlank
    @NotNull
    @Length(min = 11, max = 11)
    @Column( length = 11, nullable = false )
    private String cellphoneNumber;
    
    @NotBlank
    @NotNull
    @Length(min = 5, max = 254)
    @Column( length = 254, nullable = false )
    private String email;
    
    @NotBlank
    @NotNull
    @Length(min = 0, max = 254)
    @Column( length = 254, nullable = false )
    private String companyRegistrationNumber;
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getNeighborhood() {
        return neighborhood;
    }

    public void setNeighborhood(String neighborhood) {
        this.neighborhood = neighborhood;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getCellphoneNumber() {
        return cellphoneNumber;
    }

    public void setCellphoneNumber(String cellphoneNumber) {
        this.cellphoneNumber = cellphoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCompanyRegistrationNumber() {
        return companyRegistrationNumber;
    }

    public void setCompanyRegistrationNumber(String companyRegistrationNumber) {
        this.companyRegistrationNumber = companyRegistrationNumber;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((companyName == null) ? 0 : companyName.hashCode());
        result = prime * result + ((address == null) ? 0 : address.hashCode());
        result = prime * result + ((neighborhood == null) ? 0 : neighborhood.hashCode());
        result = prime * result + ((zipCode == null) ? 0 : zipCode.hashCode());
        result = prime * result + ((city == null) ? 0 : city.hashCode());
        result = prime * result + ((phoneNumber == null) ? 0 : phoneNumber.hashCode());
        result = prime * result + ((cellphoneNumber == null) ? 0 : cellphoneNumber.hashCode());
        result = prime * result + ((email == null) ? 0 : email.hashCode());
        result = prime * result + ((companyRegistrationNumber == null) ? 0 : companyRegistrationNumber.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Workshop other = (Workshop) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        if (companyName == null) {
            if (other.companyName != null)
                return false;
        } else if (!companyName.equals(other.companyName))
            return false;
        if (address == null) {
            if (other.address != null)
                return false;
        } else if (!address.equals(other.address))
            return false;
        if (neighborhood == null) {
            if (other.neighborhood != null)
                return false;
        } else if (!neighborhood.equals(other.neighborhood))
            return false;
        if (zipCode == null) {
            if (other.zipCode != null)
                return false;
        } else if (!zipCode.equals(other.zipCode))
            return false;
        if (city == null) {
            if (other.city != null)
                return false;
        } else if (!city.equals(other.city))
            return false;
        if (phoneNumber != other.phoneNumber)
            return false;
        if (cellphoneNumber != other.cellphoneNumber)
            return false;
        if (email != other.email)
            return false;
        if (companyRegistrationNumber == null) {
            if (other.companyRegistrationNumber != null)
                return false;
        } else if (!companyRegistrationNumber.equals(other.companyRegistrationNumber))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Workshop [id=" + id + ", companyName=" + companyName + ", address=" + address + ", neighborhood="
                + neighborhood + ", zipCode=" + zipCode + ", city=" + city + ", phoneNumber=" + phoneNumber
                + ", cellphoneNumber=" + cellphoneNumber + ", email=" + email + ", companyRegistrationNumber="
                + companyRegistrationNumber + "]";
    }
}
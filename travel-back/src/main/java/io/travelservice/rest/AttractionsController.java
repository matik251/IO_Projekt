package io.travelservice.rest;

import io.travelservice.entities.Attraction;
import io.travelservice.repository.AttractionsRepository;
import io.travelservice.repository.DestinationsRepository;
import io.travelservice.repository.OfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/attraction/")
public class AttractionsController {
    @Autowired
    private AttractionsRepository attractionsRepository;

    @PostMapping
    public ResponseEntity<?> addAttraction(@RequestBody Attraction attraction){
        try{
           return new ResponseEntity(attractionsRepository.save(attraction), HttpStatus.OK) ;
        }catch (Exception ex){}
        return new ResponseEntity("Error", HttpStatus.BAD_REQUEST) ;
    }

}

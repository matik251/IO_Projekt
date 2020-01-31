package io.travelservice.rest;

import io.travelservice.entities.Attraction;
import io.travelservice.entities.Destination;
import io.travelservice.repository.AttractionsRepository;
import io.travelservice.repository.DestinationsRepository;
import io.travelservice.repository.OfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/destination/")
public class DestinationsController {
    @Autowired
    private DestinationsRepository destinationsRepository;

    @Autowired
    private AttractionsRepository attractionsRepository;

    @PostMapping
    public ResponseEntity<?> addDestination(@RequestBody Destination destination){
        try{
            return new ResponseEntity(destinationsRepository.save(destination), HttpStatus.OK) ;
        }catch (Exception ex){}
        return new ResponseEntity("Error", HttpStatus.BAD_REQUEST) ;
    }

    @PostMapping("/addAttraction/{id}/{attractionIds}")
    public ResponseEntity<?> addAttractionToDestination(@PathVariable int id, @PathVariable int attractionIds){
        try{
            Optional<Destination> optionalDestination = destinationsRepository.findById(id);
            if(optionalDestination.isPresent()){
                Destination destination = optionalDestination.get();

                    Optional<Attraction> attraction = attractionsRepository.findById(attractionIds);
                    if (attraction.isPresent()) {
                        destination.addToList(attraction.get());
                    }

                return new ResponseEntity(destinationsRepository.save(destination), HttpStatus.OK) ;
            }
        }catch (Exception ex){}
        return new ResponseEntity("Error", HttpStatus.BAD_REQUEST) ;
    }
}

package io.travelservice.rest;

import io.travelservice.entities.Date;
import io.travelservice.entities.Destination;
import io.travelservice.entities.Offer;
import io.travelservice.entities.Participian;
import io.travelservice.repository.DateRepository;
import io.travelservice.repository.DestinationsRepository;
import io.travelservice.repository.OfferRepository;
import io.travelservice.repository.ParticipianRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@Controller
@RequestMapping("/offers/")
public class OfferController {

    @Autowired
    private OfferRepository offerRepository;

    @Autowired
    private DestinationsRepository destinationsRepository;

    @Autowired
    private DateRepository dateRepository;

    @Autowired
    private ParticipianRepository participianRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping
    public ResponseEntity<?> getOffer(){
       return new ResponseEntity<>(offerRepository.findAll(),HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/{id}/")
    public ResponseEntity<?> getOffer(@PathVariable int id){
        offerRepository.delete(offerRepository.findById(id).get());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> addOffer(@RequestBody Offer offer){
        try{
            return new ResponseEntity(offerRepository.save(offer), HttpStatus.OK) ;
        }catch (Exception ex){}
        return new ResponseEntity("Error", HttpStatus.BAD_REQUEST) ;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/{id}/addDate/")
    public ResponseEntity<?> addDateToOffer(@PathVariable int id, @RequestBody Date date){
        try{
            Optional<Offer> optionalOffer = offerRepository.findById(id);
            if(optionalOffer.isPresent()){
                Offer offer = optionalOffer.get();
                offer.addDateToList(dateRepository.save(date));
                return new ResponseEntity(offerRepository.save(offer), HttpStatus.OK) ;
            }
        }catch (Exception ex){}
        return new ResponseEntity("Error", HttpStatus.BAD_REQUEST) ;
    }

    @PostMapping("/{id}/{destinationId}/")
    public ResponseEntity<?> addDestinationToOffer(@PathVariable int id, @PathVariable int destinationId){
        try{
            Optional<Offer> optionalOffer = offerRepository.findById(id);
            Optional<Destination> optionalDestination = destinationsRepository.findById(destinationId);
            if(optionalOffer.isPresent() && optionalDestination.isPresent()){
                Offer offer = optionalOffer.get();
                offer.addDestinationToList(optionalDestination.get());
                return new ResponseEntity(offerRepository.save(offer), HttpStatus.OK) ;
            }
        }catch (Exception ex){}
        return new ResponseEntity("Error", HttpStatus.BAD_REQUEST) ;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/addParticipian/{id}/")
    public ResponseEntity<?> addParticipianToOffer(@PathVariable int id,@RequestBody Participian participian){
        try{
            Optional<Date> optionalDate = dateRepository.findById(id);
            if(optionalDate.isPresent()){
                Date date = optionalDate.get();
                date.addParticipian(participianRepository.save(participian));
                dateRepository.save(date);
                return new ResponseEntity( HttpStatus.OK) ;
            }
        }catch (Exception ex){}
        return new ResponseEntity("Error", HttpStatus.BAD_REQUEST) ;
    }
}

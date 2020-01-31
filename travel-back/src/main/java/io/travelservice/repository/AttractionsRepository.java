package io.travelservice.repository;

import io.travelservice.entities.Attraction;
import io.travelservice.entities.Offer;
import org.springframework.data.repository.CrudRepository;

public interface AttractionsRepository extends CrudRepository<Attraction,Integer>  {
}

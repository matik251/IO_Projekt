package io.travelservice.repository;

import io.travelservice.entities.Destination;
import io.travelservice.entities.Offer;
import org.springframework.data.repository.CrudRepository;

public interface DestinationsRepository extends CrudRepository<Destination,Integer>  {
}

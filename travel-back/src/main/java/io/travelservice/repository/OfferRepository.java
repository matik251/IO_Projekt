package io.travelservice.repository;

import io.travelservice.entities.Offer;
import org.springframework.data.repository.CrudRepository;

public interface OfferRepository extends CrudRepository<Offer,Integer>  {
}

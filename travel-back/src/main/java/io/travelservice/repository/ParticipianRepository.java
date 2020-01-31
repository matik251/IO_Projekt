package io.travelservice.repository;

import io.travelservice.entities.Offer;
import io.travelservice.entities.Participian;
import org.springframework.data.repository.CrudRepository;

public interface ParticipianRepository extends CrudRepository<Participian,Integer>  {
}

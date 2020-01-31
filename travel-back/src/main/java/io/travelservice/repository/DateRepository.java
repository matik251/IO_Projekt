package io.travelservice.repository;

import io.travelservice.entities.Date;
import org.springframework.data.repository.CrudRepository;

public interface DateRepository extends CrudRepository<Date,Integer>  {
}

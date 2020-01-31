package io.travelservice.entities;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Offer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String name;

    @ManyToMany
    private List<Date> dates = new ArrayList<>();

    @ManyToMany
    private List<Destination> destinations = new ArrayList<>();

    public Offer() {
    }

    public void addDateToList(Date date){
        dates.add(date);
    }

    public void addDestinationToList(Destination destination){
        destinations.add(destination);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public List<Destination> getDestinations() {
        return destinations;
    }

    public void setDestinations(List<Destination> destinations) {
        this.destinations = destinations;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Date> getDates() {
        return dates;
    }

    public void setDates(List<Date> dates) {
        this.dates = dates;
    }
}

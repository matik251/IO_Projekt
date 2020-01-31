package io.travelservice.entities;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Destination {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;
    private float lang;
    private float lat;

    @ManyToMany
    private List<Attraction> attractionList = new ArrayList<>();

    public Destination() {
    }

    public void addToList(Attraction attraction){
        attractionList.add(attraction);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public float getLang() {
        return lang;
    }

    public void setLang(float lang) {
        this.lang = lang;
    }

    public float getLat() {
        return lat;
    }

    public void setLat(float lat) {
        this.lat = lat;
    }

    public List<Attraction> getAttractionList() {
        return attractionList;
    }

    public void setAttractionList(List<Attraction> attractionList) {
        this.attractionList = attractionList;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

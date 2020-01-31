package io.travelservice.entities;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Date {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private java.util.Date dateFrom;
    private java.util.Date dateTo;

    @ManyToMany
    private List<Participian> participians = new ArrayList<>();

    private boolean isAccepted ;

    public Date() {
    }

    public void addParticipian(Participian participian){
        participians.add(participian);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public java.util.Date getDateFrom() {
        return dateFrom;
    }

    public void setDateFrom(java.util.Date dateFrom) {
        this.dateFrom = dateFrom;
    }

    public java.util.Date getDateTo() {
        return dateTo;
    }

    public void setDateTo(java.util.Date dateTo) {
        this.dateTo = dateTo;
    }

    public boolean isAccepted() {
        return isAccepted;
    }

    public void setAccepted(boolean accepted) {
        isAccepted = accepted;
    }

    public List<Participian> getParticipians() {
        return participians;
    }

    public void setParticipians(List<Participian> participians) {
        this.participians = participians;
    }
}

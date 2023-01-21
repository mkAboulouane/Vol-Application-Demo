package com.ana.test.bean;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.util.Objects;
import java.util.Date;

@Entity
@Table(name = "billet")
public class Billet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @ManyToOne
    private Passager passager;


    @ManyToOne
    private Siege siege;


    @ManyToOne
    private Vol vol;

    private String numBillet;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date dateEmission;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date datePaiment;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date dateReservation;


    public Billet() {
                   super();
           }


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public Passager getPassager() {
        return this.passager;
    }

    public void setPassager(Passager passager) {
        this.passager = passager;
    }


    public Siege getSiege() {
        return this.siege;
    }

    public void setSiege(Siege siege) {
        this.siege = siege;
    }


    public Vol getVol() {
        return this.vol;
    }

    public void setVol(Vol vol) {
        this.vol = vol;
    }


    public String getNumBillet() {
        return this.numBillet;
    }

    public void setNumBillet(String numBillet) {
        this.numBillet = numBillet;
    }


    public Date getCreatedAt() {
        return this.createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }



    public Date getDateEmission() {
        return this.dateEmission;
    }

    public void setDateEmission(Date dateEmission) {
        this.dateEmission = dateEmission;
    }



    public Date getDatePaiment() {
        return this.datePaiment;
    }

    public void setDatePaiment(Date datePaiment) {
        this.datePaiment = datePaiment;
    }



    public Date getDateReservation() {
        return this.dateReservation;
    }

    public void setDateReservation(Date dateReservation) {
        this.dateReservation = dateReservation;
    }


    @Override
    public int hashCode() {
        return Objects.hash(id);
    }


}
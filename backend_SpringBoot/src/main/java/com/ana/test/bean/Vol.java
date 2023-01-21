package com.ana.test.bean;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.util.Objects;
import java.util.Date;

@Entity
@Table(name = "vol")
public class Vol {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String numVol;
    private String villeDepart;
    private String villeArrivee;
    private Boolean avion;
    private Boolean pilote;
    private Boolean compagnie;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date retard;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date dateDepart;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date dateArrivee;


    public Vol() {
                   super();
           }


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getNumVol() {
        return this.numVol;
    }

    public void setNumVol(String numVol) {
        this.numVol = numVol;
    }


    public String getVilleDepart() {
        return this.villeDepart;
    }

    public void setVilleDepart(String villeDepart) {
        this.villeDepart = villeDepart;
    }


    public String getVilleArrivee() {
        return this.villeArrivee;
    }

    public void setVilleArrivee(String villeArrivee) {
        this.villeArrivee = villeArrivee;
    }


    public Boolean getAvion() {
        return this.avion;
    }

    public void setAvion(Boolean avion) {
        this.avion = avion;
    }


    public Boolean getPilote() {
        return this.pilote;
    }

    public void setPilote(Boolean pilote) {
        this.pilote = pilote;
    }


    public Boolean getCompagnie() {
        return this.compagnie;
    }

    public void setCompagnie(Boolean compagnie) {
        this.compagnie = compagnie;
    }


    public Date getRetard() {
        return this.retard;
    }

    public void setRetard(Date retard) {
        this.retard = retard;
    }



    public Date getDateDepart() {
        return this.dateDepart;
    }

    public void setDateDepart(Date dateDepart) {
        this.dateDepart = dateDepart;
    }



    public Date getDateArrivee() {
        return this.dateArrivee;
    }

    public void setDateArrivee(Date dateArrivee) {
        this.dateArrivee = dateArrivee;
    }


    @Override
    public int hashCode() {
        return Objects.hash(id);
    }


}
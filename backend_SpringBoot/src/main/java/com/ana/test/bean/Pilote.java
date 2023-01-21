package com.ana.test.bean;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "pilote")
public class Pilote {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String matricule;
    private String nom;
    private String prenom;
    private String qualif;
    private Boolean compagnie;


    public Pilote() {
                   super();
           }


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getMatricule() {
        return this.matricule;
    }

    public void setMatricule(String matricule) {
        this.matricule = matricule;
    }


    public String getNom() {
        return this.nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }


    public String getPrenom() {
        return this.prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }


    public String getQualif() {
        return this.qualif;
    }

    public void setQualif(String qualif) {
        this.qualif = qualif;
    }


    public Boolean getCompagnie() {
        return this.compagnie;
    }

    public void setCompagnie(Boolean compagnie) {
        this.compagnie = compagnie;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }


}
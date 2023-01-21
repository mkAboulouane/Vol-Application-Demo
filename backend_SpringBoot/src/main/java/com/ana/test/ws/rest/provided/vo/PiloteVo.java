package com.ana.test.ws.rest.provided.vo;


public class PiloteVo {

    private String id;
    private String matricule;
    private String nom;
    private String prenom;
    private String qualif;
    private Boolean compagnie;


    public PiloteVo() {
                   super();
           }



    public String getId() {
        return this.id;
    }

    public void setId(String id) {
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



}
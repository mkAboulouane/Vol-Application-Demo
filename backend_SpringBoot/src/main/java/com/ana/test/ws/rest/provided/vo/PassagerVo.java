package com.ana.test.ws.rest.provided.vo;


public class PassagerVo {

    private String id;
    private String nom;
    private String cin;
    private String prenom;
    private String telephone;
    private String status;
    private String dateNaissance;
    private String dateNaissanceMin;
    private String dateNaissanceMax;


    public PassagerVo() {
                   super();
           }



    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }


    public String getNom() {
        return this.nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }


    public String getCin() {
        return this.cin;
    }

    public void setCin(String cin) {
        this.cin = cin;
    }


    public String getPrenom() {
        return this.prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }


    public String getTelephone() {
        return this.telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }


    public String getStatus() {
        return this.status;
    }

    public void setStatus(String status) {
        this.status = status;
    }


    public String getDateNaissance() {
        return this.dateNaissance;
    }

    public void setDateNaissance(String dateNaissance) {
        this.dateNaissance = dateNaissance;
    }


    public String getDateNaissanceMin() {
        return this.dateNaissanceMin;
    }

    public void setDateNaissanceMin(String dateNaissanceMin) {
        this.dateNaissance = dateNaissanceMin;
    }


    public String getDateNaissanceMax() {
        return this.dateNaissanceMax;
    }

    public void setDateNaissanceMax(String dateNaissanceMax) {
        this.dateNaissance = dateNaissanceMax;
    }



}
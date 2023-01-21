package com.ana.test.ws.rest.provided.vo;


public class CompagnieVo {

    private String id;
    private String code;
    private String nom;
    private String siegeSocial;


    public CompagnieVo() {
                   super();
           }



    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }


    public String getCode() {
        return this.code;
    }

    public void setCode(String code) {
        this.code = code;
    }


    public String getNom() {
        return this.nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }


    public String getSiegeSocial() {
        return this.siegeSocial;
    }

    public void setSiegeSocial(String siegeSocial) {
        this.siegeSocial = siegeSocial;
    }



}
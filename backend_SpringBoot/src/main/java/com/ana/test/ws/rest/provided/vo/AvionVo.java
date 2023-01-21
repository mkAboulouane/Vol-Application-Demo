package com.ana.test.ws.rest.provided.vo;


public class AvionVo {

    private String id;
    private String codeAvion;
    private String typeAvion;
    private String modeleAvion;
    private String nbPassagers;


    public AvionVo() {
                   super();
           }



    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }


    public String getCodeAvion() {
        return this.codeAvion;
    }

    public void setCodeAvion(String codeAvion) {
        this.codeAvion = codeAvion;
    }


    public String getTypeAvion() {
        return this.typeAvion;
    }

    public void setTypeAvion(String typeAvion) {
        this.typeAvion = typeAvion;
    }


    public String getModeleAvion() {
        return this.modeleAvion;
    }

    public void setModeleAvion(String modeleAvion) {
        this.modeleAvion = modeleAvion;
    }


    public String getNbPassagers() {
        return this.nbPassagers;
    }

    public void setNbPassagers(String nbPassagers) {
        this.nbPassagers = nbPassagers;
    }



}
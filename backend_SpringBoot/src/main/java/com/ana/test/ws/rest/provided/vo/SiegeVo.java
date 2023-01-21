package com.ana.test.ws.rest.provided.vo;


public class SiegeVo {

    private String id;
    private AvionVo avionVo;

    private String numAllee;
    private String numRang;
    private String classe;


    public SiegeVo() {
                   super();
           }



    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }


    public AvionVo getAvionVo() {
        return this.avionVo;
    }

    public void setAvionVo(AvionVo avionVo) {
        this.avionVo = avionVo;
    }


    public String getNumAllee() {
        return this.numAllee;
    }

    public void setNumAllee(String numAllee) {
        this.numAllee = numAllee;
    }


    public String getNumRang() {
        return this.numRang;
    }

    public void setNumRang(String numRang) {
        this.numRang = numRang;
    }


    public String getClasse() {
        return this.classe;
    }

    public void setClasse(String classe) {
        this.classe = classe;
    }



}
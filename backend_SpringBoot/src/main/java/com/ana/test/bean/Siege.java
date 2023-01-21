package com.ana.test.bean;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "siege")
public class Siege {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @ManyToOne
    private Avion avion;

    private String numAllee;
    private String numRang;
    private String classe;


    public Siege() {
                   super();
           }


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public Avion getAvion() {
        return this.avion;
    }

    public void setAvion(Avion avion) {
        this.avion = avion;
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

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }


}
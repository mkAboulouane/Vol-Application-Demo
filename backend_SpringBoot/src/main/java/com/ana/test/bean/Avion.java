package com.ana.test.bean;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "avion")
public class Avion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String codeAvion;
    private String typeAvion;
    private String modeleAvion;
    private Integer nbPassagers;


    public Avion() {
                   super();
           }


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
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


    public Integer getNbPassagers() {
        return this.nbPassagers;
    }

    public void setNbPassagers(Integer nbPassagers) {
        this.nbPassagers = nbPassagers;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }


}
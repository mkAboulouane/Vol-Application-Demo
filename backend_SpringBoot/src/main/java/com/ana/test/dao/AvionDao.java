package com.ana.test.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ana.test.bean.Avion;


@Repository
public interface AvionDao extends JpaRepository<Avion,Long> {

   Avion findByCodeAvion(String reference);
   void deleteByCodeAvion(String ref);


}
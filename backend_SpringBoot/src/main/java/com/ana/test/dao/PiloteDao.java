package com.ana.test.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ana.test.bean.Pilote;


@Repository
public interface PiloteDao extends JpaRepository<Pilote,Long> {

   Pilote findByMatricule(String reference);
   void deleteByMatricule(String ref);


}
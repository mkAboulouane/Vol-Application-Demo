package com.ana.test.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ana.test.bean.Vol;


@Repository
public interface VolDao extends JpaRepository<Vol,Long> {

   Vol findByNumVol(String reference);
   void deleteByNumVol(String ref);


}
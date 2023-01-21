package com.ana.test.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ana.test.bean.Billet;


@Repository
public interface BilletDao extends JpaRepository<Billet,Long> {

   Billet findByNumBillet(String reference);
   void deleteByNumBillet(String ref);


}
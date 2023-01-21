package com.ana.test.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ana.test.bean.Compagnie;


@Repository
public interface CompagnieDao extends JpaRepository<Compagnie,Long> {

   Compagnie findByCode(String reference);
   void deleteByCode(String ref);


}
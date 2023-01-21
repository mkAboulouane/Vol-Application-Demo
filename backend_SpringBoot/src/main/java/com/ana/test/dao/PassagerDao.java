package com.ana.test.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ana.test.bean.Passager;


@Repository
public interface PassagerDao extends JpaRepository<Passager,Long> {

   Passager findByCin(String reference);
   void deleteByCin(String ref);


}
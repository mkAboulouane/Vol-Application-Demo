package com.ana.test.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ana.test.bean.Siege;


@Repository
public interface SiegeDao extends JpaRepository<Siege,Long> {



}
package com.ana.test.service.user.impl;

import com.ana.test.bean.Avion;
import com.ana.test.service.user.facade.AvionService;
import com.ana.test.dao.AvionDao;
import com.ana.test.ws.rest.provided.vo.AvionVo;
import com.ana.test.service.util.SearchUtil;
import javax.persistence.EntityManager;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class AvionServiceImpl implements AvionService {


    @Autowired
    private AvionDao avionDao;

    @Autowired
    private EntityManager entityManager;

     @Override
        public Avion findByCodeAvion(String reference) {
       return avionDao.findByCodeAvion(reference);
       }

    @Override
    @Transactional
     public int deleteByCodeAvion(String reference) {
       avionDao.deleteByCodeAvion(reference);
       return 1; 
       }

      @Override
    public List<Avion> findAll() {
        return avionDao.findAll();
    }


    @Override
    public Page<Avion> paginate(int page, int size) {
        return avionDao.findAll(PageRequest.of(page, size));
    }

    @Override
    public Avion findById(Long id) {
        return avionDao.findById(id).orElse(null);
    }

    @Override
    public Avion findByIdWithAssociatedList(Long id) {
        return null;
    }

    @Override
    @Transactional
    public int deleteById(Long id) {
        avionDao.deleteById(id);
         return 1;
    }

    @Override
    public List<List<Avion>> getToBeSavedAndToBeDeleted(List<Avion> oldList, List<Avion> newList) {
        return null;
    }

    @Override
    public Avion save(Avion entity) {
        return avionDao.save(entity);
    }

    @Override
    public List<Avion> save(List<Avion> list) {
        return null;
    }

    @Override
    public Avion update(Avion entity) {
        return avionDao.save(entity);
    }

    @Override
    @Transactional
    public int delete(Avion entity) {
        return 0;
    }
    
    @Override
    @Transactional
    public void delete(List<Avion> list) {

    }

    @Override
    public void update(List<Avion> list) {

           }

    @Override
    public List<Avion> findByCriteria(AvionVo entity) {

        String query = "SELECT o FROM Avion o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", entity.getId());
        query += SearchUtil.addConstraint("o", "codeAvion", "LIKE", entity.getCodeAvion());
        query += SearchUtil.addConstraint("o", "typeAvion", "LIKE", entity.getTypeAvion());
        query += SearchUtil.addConstraint("o", "modeleAvion", "LIKE", entity.getModeleAvion());
        query += SearchUtil.addConstraint("o", "nbPassagers", "=", entity.getNbPassagers());

        return entityManager.createQuery(query).getResultList();
    }

}

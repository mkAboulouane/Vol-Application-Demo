package com.ana.test.service.user.impl;

import com.ana.test.bean.Passager;
import com.ana.test.service.user.facade.PassagerService;
import com.ana.test.dao.PassagerDao;
import com.ana.test.ws.rest.provided.vo.PassagerVo;
import com.ana.test.service.util.SearchUtil;
import javax.persistence.EntityManager;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class PassagerServiceImpl implements PassagerService {


    @Autowired
    private PassagerDao passagerDao;

    @Autowired
    private EntityManager entityManager;

     @Override
        public Passager findByCin(String reference) {
       return passagerDao.findByCin(reference);
       }

    @Override
    @Transactional
     public int deleteByCin(String reference) {
       passagerDao.deleteByCin(reference);
       return 1; 
       }

      @Override
    public List<Passager> findAll() {
        return passagerDao.findAll();
    }


    @Override
    public Page<Passager> paginate(int page, int size) {
        return passagerDao.findAll(PageRequest.of(page, size));
    }

    @Override
    public Passager findById(Long id) {
        return passagerDao.findById(id).orElse(null);
    }

    @Override
    public Passager findByIdWithAssociatedList(Long id) {
        return null;
    }

    @Override
    @Transactional
    public int deleteById(Long id) {
        passagerDao.deleteById(id);
         return 1;
    }

    @Override
    public List<List<Passager>> getToBeSavedAndToBeDeleted(List<Passager> oldList, List<Passager> newList) {
        return null;
    }

    @Override
    public Passager save(Passager entity) {
        return passagerDao.save(entity);
    }

    @Override
    public List<Passager> save(List<Passager> list) {
        return null;
    }

    @Override
    public Passager update(Passager entity) {
        return passagerDao.save(entity);
    }

    @Override
    @Transactional
    public int delete(Passager entity) {
        return 0;
    }
    
    @Override
    @Transactional
    public void delete(List<Passager> list) {

    }

    @Override
    public void update(List<Passager> list) {

           }

    @Override
    public List<Passager> findByCriteria(PassagerVo entity) {

        String query = "SELECT o FROM Passager o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", entity.getId());
        query += SearchUtil.addConstraint("o", "nom", "LIKE", entity.getNom());
        query += SearchUtil.addConstraint("o", "cin", "LIKE", entity.getCin());
        query += SearchUtil.addConstraint("o", "prenom", "LIKE", entity.getPrenom());
        query += SearchUtil.addConstraint("o", "telephone", "LIKE", entity.getTelephone());
        query += SearchUtil.addConstraint("o", "status", "LIKE", entity.getStatus());
		query += SearchUtil.addConstraintDate("o", "dateNaissance", "=", entity.getDateNaissance());
		query += SearchUtil.addConstraintMinMaxDate("o", "dateNaissance", entity.getDateNaissanceMin(), entity.getDateNaissanceMax());

        return entityManager.createQuery(query).getResultList();
    }

}

package com.ana.test.service.user.impl;

import com.ana.test.bean.Vol;
import com.ana.test.service.user.facade.VolService;
import com.ana.test.dao.VolDao;
import com.ana.test.ws.rest.provided.vo.VolVo;
import com.ana.test.service.util.SearchUtil;
import javax.persistence.EntityManager;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class VolServiceImpl implements VolService {


    @Autowired
    private VolDao volDao;

    @Autowired
    private EntityManager entityManager;

     @Override
        public Vol findByNumVol(String reference) {
       return volDao.findByNumVol(reference);
       }

    @Override
    @Transactional
     public int deleteByNumVol(String reference) {
       volDao.deleteByNumVol(reference);
       return 1; 
       }

      @Override
    public List<Vol> findAll() {
        return volDao.findAll();
    }


    @Override
    public Page<Vol> paginate(int page, int size) {
        return volDao.findAll(PageRequest.of(page, size));
    }

    @Override
    public Vol findById(Long id) {
        return volDao.findById(id).orElse(null);
    }

    @Override
    public Vol findByIdWithAssociatedList(Long id) {
        return null;
    }

    @Override
    @Transactional
    public int deleteById(Long id) {
        volDao.deleteById(id);
         return 1;
    }

    @Override
    public List<List<Vol>> getToBeSavedAndToBeDeleted(List<Vol> oldList, List<Vol> newList) {
        return null;
    }

    @Override
    public Vol save(Vol entity) {
        return volDao.save(entity);
    }

    @Override
    public List<Vol> save(List<Vol> list) {
        return null;
    }

    @Override
    public Vol update(Vol entity) {
        return volDao.save(entity);
    }

    @Override
    @Transactional
    public int delete(Vol entity) {
        return 0;
    }
    
    @Override
    @Transactional
    public void delete(List<Vol> list) {

    }

    @Override
    public void update(List<Vol> list) {

           }

    @Override
    public List<Vol> findByCriteria(VolVo entity) {

        String query = "SELECT o FROM Vol o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", entity.getId());
        query += SearchUtil.addConstraint("o", "numVol", "LIKE", entity.getNumVol());
        query += SearchUtil.addConstraint("o", "villeDepart", "LIKE", entity.getVilleDepart());
        query += SearchUtil.addConstraint("o", "villeArrivee", "LIKE", entity.getVilleArrivee());
        query += SearchUtil.addConstraint("o", "avion", "=", entity.getAvion());
        query += SearchUtil.addConstraint("o", "pilote", "=", entity.getPilote());
        query += SearchUtil.addConstraint("o", "compagnie", "=", entity.getCompagnie());
		query += SearchUtil.addConstraintDate("o", "retard", "=", entity.getRetard());
		query += SearchUtil.addConstraintMinMaxDate("o", "retard", entity.getRetardMin(), entity.getRetardMax());
		query += SearchUtil.addConstraintDate("o", "dateDepart", "=", entity.getDateDepart());
		query += SearchUtil.addConstraintMinMaxDate("o", "dateDepart", entity.getDateDepartMin(), entity.getDateDepartMax());
		query += SearchUtil.addConstraintDate("o", "dateArrivee", "=", entity.getDateArrivee());
		query += SearchUtil.addConstraintMinMaxDate("o", "dateArrivee", entity.getDateArriveeMin(), entity.getDateArriveeMax());

        return entityManager.createQuery(query).getResultList();
    }

}

package com.ana.test.service.user.impl;

import com.ana.test.bean.Billet;
import com.ana.test.service.user.facade.BilletService;
import com.ana.test.dao.BilletDao;
import com.ana.test.ws.rest.provided.vo.BilletVo;
import com.ana.test.service.util.SearchUtil;
import javax.persistence.EntityManager;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class BilletServiceImpl implements BilletService {


    @Autowired
    private BilletDao billetDao;

    @Autowired
    private EntityManager entityManager;

     @Override
        public Billet findByNumBillet(String reference) {
       return billetDao.findByNumBillet(reference);
       }

    @Override
    @Transactional
     public int deleteByNumBillet(String reference) {
       billetDao.deleteByNumBillet(reference);
       return 1; 
       }

      @Override
    public List<Billet> findAll() {
        return billetDao.findAll();
    }


    @Override
    public Page<Billet> paginate(int page, int size) {
        return billetDao.findAll(PageRequest.of(page, size));
    }

    @Override
    public Billet findById(Long id) {
        return billetDao.findById(id).orElse(null);
    }

    @Override
    public Billet findByIdWithAssociatedList(Long id) {
        return null;
    }

    @Override
    @Transactional
    public int deleteById(Long id) {
        billetDao.deleteById(id);
         return 1;
    }

    @Override
    public List<List<Billet>> getToBeSavedAndToBeDeleted(List<Billet> oldList, List<Billet> newList) {
        return null;
    }

    @Override
    public Billet save(Billet entity) {
        return billetDao.save(entity);
    }

    @Override
    public List<Billet> save(List<Billet> list) {
        return null;
    }

    @Override
    public Billet update(Billet entity) {
        return billetDao.save(entity);
    }

    @Override
    @Transactional
    public int delete(Billet entity) {
        return 0;
    }
    
    @Override
    @Transactional
    public void delete(List<Billet> list) {

    }

    @Override
    public void update(List<Billet> list) {

           }

    @Override
    public List<Billet> findByCriteria(BilletVo entity) {

        String query = "SELECT o FROM Billet o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", entity.getId());
        query += SearchUtil.addConstraint("o", "numBillet", "LIKE", entity.getNumBillet());
		query += SearchUtil.addConstraintDate("o", "createdAt", "=", entity.getCreatedAt());
		query += SearchUtil.addConstraintMinMaxDate("o", "createdAt", entity.getCreatedAtMin(), entity.getCreatedAtMax());
		query += SearchUtil.addConstraintDate("o", "dateEmission", "=", entity.getDateEmission());
		query += SearchUtil.addConstraintMinMaxDate("o", "dateEmission", entity.getDateEmissionMin(), entity.getDateEmissionMax());
		query += SearchUtil.addConstraintDate("o", "datePaiment", "=", entity.getDatePaiment());
		query += SearchUtil.addConstraintMinMaxDate("o", "datePaiment", entity.getDatePaimentMin(), entity.getDatePaimentMax());
		query += SearchUtil.addConstraintDate("o", "dateReservation", "=", entity.getDateReservation());
		query += SearchUtil.addConstraintMinMaxDate("o", "dateReservation", entity.getDateReservationMin(), entity.getDateReservationMax());

        return entityManager.createQuery(query).getResultList();
    }

}

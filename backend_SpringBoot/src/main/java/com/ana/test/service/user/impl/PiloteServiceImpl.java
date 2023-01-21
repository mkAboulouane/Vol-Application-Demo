package com.ana.test.service.user.impl;

import com.ana.test.bean.Pilote;
import com.ana.test.service.user.facade.PiloteService;
import com.ana.test.dao.PiloteDao;
import com.ana.test.ws.rest.provided.vo.PiloteVo;
import com.ana.test.service.util.SearchUtil;
import javax.persistence.EntityManager;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class PiloteServiceImpl implements PiloteService {


    @Autowired
    private PiloteDao piloteDao;

    @Autowired
    private EntityManager entityManager;

     @Override
        public Pilote findByMatricule(String reference) {
       return piloteDao.findByMatricule(reference);
       }

    @Override
    @Transactional
     public int deleteByMatricule(String reference) {
       piloteDao.deleteByMatricule(reference);
       return 1; 
       }

      @Override
    public List<Pilote> findAll() {
        return piloteDao.findAll();
    }


    @Override
    public Page<Pilote> paginate(int page, int size) {
        return piloteDao.findAll(PageRequest.of(page, size));
    }

    @Override
    public Pilote findById(Long id) {
        return piloteDao.findById(id).orElse(null);
    }

    @Override
    public Pilote findByIdWithAssociatedList(Long id) {
        return null;
    }

    @Override
    @Transactional
    public int deleteById(Long id) {
        piloteDao.deleteById(id);
         return 1;
    }

    @Override
    public List<List<Pilote>> getToBeSavedAndToBeDeleted(List<Pilote> oldList, List<Pilote> newList) {
        return null;
    }

    @Override
    public Pilote save(Pilote entity) {
        return piloteDao.save(entity);
    }

    @Override
    public List<Pilote> save(List<Pilote> list) {
        return null;
    }

    @Override
    public Pilote update(Pilote entity) {
        return piloteDao.save(entity);
    }

    @Override
    @Transactional
    public int delete(Pilote entity) {
        return 0;
    }
    
    @Override
    @Transactional
    public void delete(List<Pilote> list) {

    }

    @Override
    public void update(List<Pilote> list) {

           }

    @Override
    public List<Pilote> findByCriteria(PiloteVo entity) {

        String query = "SELECT o FROM Pilote o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", entity.getId());
        query += SearchUtil.addConstraint("o", "matricule", "LIKE", entity.getMatricule());
        query += SearchUtil.addConstraint("o", "nom", "LIKE", entity.getNom());
        query += SearchUtil.addConstraint("o", "prenom", "LIKE", entity.getPrenom());
        query += SearchUtil.addConstraint("o", "qualif", "LIKE", entity.getQualif());
        query += SearchUtil.addConstraint("o", "compagnie", "=", entity.getCompagnie());

        return entityManager.createQuery(query).getResultList();
    }

}

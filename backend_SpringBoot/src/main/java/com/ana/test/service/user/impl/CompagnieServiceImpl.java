package com.ana.test.service.user.impl;

import com.ana.test.bean.Compagnie;
import com.ana.test.service.user.facade.CompagnieService;
import com.ana.test.dao.CompagnieDao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class CompagnieServiceImpl implements CompagnieService {


    @Autowired
    private CompagnieDao compagnieDao;
     @Override
        public Compagnie findByCode(String reference) {
       return compagnieDao.findByCode(reference);
       }

    @Override
    @Transactional
     public int deleteByCode(String reference) {
       compagnieDao.deleteByCode(reference);
       return 1; 
       }

      @Override
    public List<Compagnie> findAll() {
        return compagnieDao.findAll();
    }


    @Override
    public Page<Compagnie> paginate(int page, int size) {
        return compagnieDao.findAll(PageRequest.of(page, size));
    }

    @Override
    public Compagnie findById(Long id) {
        return compagnieDao.findById(id).orElse(null);
    }

    @Override
    public Compagnie findByIdWithAssociatedList(Long id) {
        return null;
    }

    @Override
    @Transactional
    public int deleteById(Long id) {
        compagnieDao.deleteById(id);
         return 1;
    }

    @Override
    public List<List<Compagnie>> getToBeSavedAndToBeDeleted(List<Compagnie> oldList, List<Compagnie> newList) {
        return null;
    }

    @Override
    public Compagnie save(Compagnie entity) {
        return compagnieDao.save(entity);
    }

    @Override
    public List<Compagnie> save(List<Compagnie> list) {
        return null;
    }

    @Override
    public Compagnie update(Compagnie entity) {
        return compagnieDao.save(entity);
    }

    @Override
    @Transactional
    public int delete(Compagnie entity) {
        return 0;
    }
    
    @Override
    @Transactional
    public void delete(List<Compagnie> list) {

    }

    @Override
    public void update(List<Compagnie> list) {

           }
}

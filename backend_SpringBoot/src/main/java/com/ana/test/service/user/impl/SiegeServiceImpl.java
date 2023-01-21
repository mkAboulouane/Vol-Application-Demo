package com.ana.test.service.user.impl;

import com.ana.test.bean.Siege;
import com.ana.test.service.user.facade.SiegeService;
import com.ana.test.dao.SiegeDao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class SiegeServiceImpl implements SiegeService {


    @Autowired
    private SiegeDao siegeDao;
    @Override
    public List<Siege> findAll() {
        return siegeDao.findAll();
    }


    @Override
    public Page<Siege> paginate(int page, int size) {
        return siegeDao.findAll(PageRequest.of(page, size));
    }

    @Override
    public Siege findById(Long id) {
        return siegeDao.findById(id).orElse(null);
    }

    @Override
    public Siege findByIdWithAssociatedList(Long id) {
        return null;
    }

    @Override
    @Transactional
    public int deleteById(Long id) {
        siegeDao.deleteById(id);
         return 1;
    }

    @Override
    public List<List<Siege>> getToBeSavedAndToBeDeleted(List<Siege> oldList, List<Siege> newList) {
        return null;
    }

    @Override
    public Siege save(Siege entity) {
        return siegeDao.save(entity);
    }

    @Override
    public List<Siege> save(List<Siege> list) {
        return null;
    }

    @Override
    public Siege update(Siege entity) {
        return siegeDao.save(entity);
    }

    @Override
    @Transactional
    public int delete(Siege entity) {
        return 0;
    }
    
    @Override
    @Transactional
    public void delete(List<Siege> list) {

    }

    @Override
    public void update(List<Siege> list) {

           }
}

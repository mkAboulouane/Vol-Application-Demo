package com.ana.test.service.user.facade;

import com.ana.test.bean.Passager;
import com.ana.test.service.core.facade.AbstractService;
import com.ana.test.ws.rest.provided.vo.PassagerVo;

import java.util.List;

public interface PassagerService extends AbstractService<Passager, Long> {

   List<Passager> findByCriteria(PassagerVo passagerVo);
   Passager findByCin(String reference);
   int deleteByCin(String ref);

}

package com.ana.test.service.user.facade;

import com.ana.test.bean.Avion;
import com.ana.test.service.core.facade.AbstractService;
import com.ana.test.ws.rest.provided.vo.AvionVo;

import java.util.List;

public interface AvionService extends AbstractService<Avion, Long> {

   List<Avion> findByCriteria(AvionVo avionVo);
   Avion findByCodeAvion(String reference);
   int deleteByCodeAvion(String ref);

}

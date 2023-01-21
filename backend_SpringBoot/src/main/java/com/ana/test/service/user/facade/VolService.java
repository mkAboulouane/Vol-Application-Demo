package com.ana.test.service.user.facade;

import com.ana.test.bean.Vol;
import com.ana.test.service.core.facade.AbstractService;
import com.ana.test.ws.rest.provided.vo.VolVo;

import java.util.List;

public interface VolService extends AbstractService<Vol, Long> {

   List<Vol> findByCriteria(VolVo volVo);
   Vol findByNumVol(String reference);
   int deleteByNumVol(String ref);

}

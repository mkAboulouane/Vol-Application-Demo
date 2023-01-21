package com.ana.test.service.user.facade;

import com.ana.test.bean.Pilote;
import com.ana.test.service.core.facade.AbstractService;
import com.ana.test.ws.rest.provided.vo.PiloteVo;

import java.util.List;

public interface PiloteService extends AbstractService<Pilote, Long> {

   List<Pilote> findByCriteria(PiloteVo piloteVo);
   Pilote findByMatricule(String reference);
   int deleteByMatricule(String ref);

}

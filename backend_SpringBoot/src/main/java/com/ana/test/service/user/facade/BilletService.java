package com.ana.test.service.user.facade;

import com.ana.test.bean.Billet;
import com.ana.test.service.core.facade.AbstractService;
import com.ana.test.ws.rest.provided.vo.BilletVo;

import java.util.List;

public interface BilletService extends AbstractService<Billet, Long> {

   List<Billet> findByCriteria(BilletVo billetVo);
   Billet findByNumBillet(String reference);
   int deleteByNumBillet(String ref);

}

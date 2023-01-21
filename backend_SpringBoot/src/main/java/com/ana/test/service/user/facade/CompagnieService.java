package com.ana.test.service.user.facade;

import com.ana.test.bean.Compagnie;
import com.ana.test.service.core.facade.AbstractService;

public interface CompagnieService extends AbstractService<Compagnie, Long> {

   Compagnie findByCode(String reference);
   int deleteByCode(String ref);

}

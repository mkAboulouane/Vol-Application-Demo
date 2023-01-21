package com.ana.test.ws.rest.provided.converter;

import com.ana.test.bean.Compagnie;
import com.ana.test.service.util.NumberUtil;
import com.ana.test.service.util.StringUtil;
import com.ana.test.ws.rest.provided.vo.CompagnieVo;
import org.springframework.stereotype.Component;

@Component
public class CompagnieConverter extends AbstractConverter<Compagnie, CompagnieVo> {

    public CompagnieConverter() {
        init(true);
    }
    @Override
    public Compagnie toItem(CompagnieVo vo) {
        if (vo == null) {
            return null;
        } else {
            Compagnie item = new Compagnie();
            if (StringUtil.isNotEmpty(vo.getId()))
                item.setId(NumberUtil.toLong(vo.getId()));

            if (StringUtil.isNotEmpty(vo.getCode()))
                item.setCode(vo.getCode());

            if (StringUtil.isNotEmpty(vo.getNom()))
                item.setNom(vo.getNom());

            if (StringUtil.isNotEmpty(vo.getSiegeSocial()))
                item.setSiegeSocial(vo.getSiegeSocial());
            return item;
        }
    }

    @Override
    public CompagnieVo toVo(Compagnie item) {
        if (item == null) {
            return null;
        } else {
            CompagnieVo vo = new CompagnieVo();
            if (item.getId() != null)
                vo.setId(NumberUtil.toString(item.getId()));

            if (StringUtil.isNotEmpty(item.getCode()))
                vo.setCode(item.getCode());

            if (StringUtil.isNotEmpty(item.getNom()))
                vo.setNom(item.getNom());

            if (StringUtil.isNotEmpty(item.getSiegeSocial()))
                vo.setSiegeSocial(item.getSiegeSocial());
            return vo;
        }
    }


    public void init(Boolean value) {
        
    }


}
package com.ana.test.ws.rest.provided.converter;

import com.ana.test.bean.Passager;
import com.ana.test.service.util.NumberUtil;
import com.ana.test.service.util.StringUtil;
import com.ana.test.service.util.DateUtil;
import com.ana.test.ws.rest.provided.vo.PassagerVo;
import org.springframework.stereotype.Component;

@Component
public class PassagerConverter extends AbstractConverter<Passager, PassagerVo> {

    public PassagerConverter() {
        init(true);
    }
    @Override
    public Passager toItem(PassagerVo vo) {
        if (vo == null) {
            return null;
        } else {
            Passager item = new Passager();
            if (StringUtil.isNotEmpty(vo.getId()))
                item.setId(NumberUtil.toLong(vo.getId()));

            if (StringUtil.isNotEmpty(vo.getNom()))
                item.setNom(vo.getNom());

            if (StringUtil.isNotEmpty(vo.getCin()))
                item.setCin(vo.getCin());

            if (StringUtil.isNotEmpty(vo.getPrenom()))
                item.setPrenom(vo.getPrenom());

            if (StringUtil.isNotEmpty(vo.getTelephone()))
                item.setTelephone(vo.getTelephone());

            if (StringUtil.isNotEmpty(vo.getStatus()))
                item.setStatus(vo.getStatus());

            if (StringUtil.isNotEmpty(vo.getDateNaissance()))
                item.setDateNaissance(DateUtil.parseDateFr(vo.getDateNaissance()));
            return item;
        }
    }

    @Override
    public PassagerVo toVo(Passager item) {
        if (item == null) {
            return null;
        } else {
            PassagerVo vo = new PassagerVo();
            if (item.getId() != null)
                vo.setId(NumberUtil.toString(item.getId()));

            if (StringUtil.isNotEmpty(item.getNom()))
                vo.setNom(item.getNom());

            if (StringUtil.isNotEmpty(item.getCin()))
                vo.setCin(item.getCin());

            if (StringUtil.isNotEmpty(item.getPrenom()))
                vo.setPrenom(item.getPrenom());

            if (StringUtil.isNotEmpty(item.getTelephone()))
                vo.setTelephone(item.getTelephone());

            if (StringUtil.isNotEmpty(item.getStatus()))
                vo.setStatus(item.getStatus());

            if (StringUtil.isNotEmpty(item.getDateNaissance()))
                vo.setDateNaissance(DateUtil.formateDate(item.getDateNaissance()));
            return vo;
        }
    }


    public void init(Boolean value) {
        
    }


}
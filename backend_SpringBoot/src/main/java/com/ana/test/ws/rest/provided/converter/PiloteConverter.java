package com.ana.test.ws.rest.provided.converter;

import com.ana.test.bean.Pilote;
import com.ana.test.service.util.NumberUtil;
import com.ana.test.service.util.StringUtil;
import com.ana.test.ws.rest.provided.vo.PiloteVo;
import org.springframework.stereotype.Component;

@Component
public class PiloteConverter extends AbstractConverter<Pilote, PiloteVo> {

    public PiloteConverter() {
        init(true);
    }
    @Override
    public Pilote toItem(PiloteVo vo) {
        if (vo == null) {
            return null;
        } else {
            Pilote item = new Pilote();
            if (StringUtil.isNotEmpty(vo.getId()))
                item.setId(NumberUtil.toLong(vo.getId()));

            if (StringUtil.isNotEmpty(vo.getMatricule()))
                item.setMatricule(vo.getMatricule());

            if (StringUtil.isNotEmpty(vo.getNom()))
                item.setNom(vo.getNom());

            if (StringUtil.isNotEmpty(vo.getPrenom()))
                item.setPrenom(vo.getPrenom());

            if (StringUtil.isNotEmpty(vo.getQualif()))
                item.setQualif(vo.getQualif());

            if (vo.getCompagnie() != null)
                item.setCompagnie(vo.getCompagnie());
            return item;
        }
    }

    @Override
    public PiloteVo toVo(Pilote item) {
        if (item == null) {
            return null;
        } else {
            PiloteVo vo = new PiloteVo();
            if (item.getId() != null)
                vo.setId(NumberUtil.toString(item.getId()));

            if (StringUtil.isNotEmpty(item.getMatricule()))
                vo.setMatricule(item.getMatricule());

            if (StringUtil.isNotEmpty(item.getNom()))
                vo.setNom(item.getNom());

            if (StringUtil.isNotEmpty(item.getPrenom()))
                vo.setPrenom(item.getPrenom());

            if (StringUtil.isNotEmpty(item.getQualif()))
                vo.setQualif(item.getQualif());

            if (item.getCompagnie() != null)
                vo.setCompagnie(item.getCompagnie());
            return vo;
        }
    }


    public void init(Boolean value) {
        
    }


}
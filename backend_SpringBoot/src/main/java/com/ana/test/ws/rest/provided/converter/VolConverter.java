package com.ana.test.ws.rest.provided.converter;

import com.ana.test.bean.Vol;
import com.ana.test.service.util.NumberUtil;
import com.ana.test.service.util.StringUtil;
import com.ana.test.service.util.DateUtil;
import com.ana.test.ws.rest.provided.vo.VolVo;
import org.springframework.stereotype.Component;

@Component
public class VolConverter extends AbstractConverter<Vol, VolVo> {

    public VolConverter() {
        init(true);
    }
    @Override
    public Vol toItem(VolVo vo) {
        if (vo == null) {
            return null;
        } else {
            Vol item = new Vol();
            if (StringUtil.isNotEmpty(vo.getId()))
                item.setId(NumberUtil.toLong(vo.getId()));

            if (StringUtil.isNotEmpty(vo.getNumVol()))
                item.setNumVol(vo.getNumVol());

            if (StringUtil.isNotEmpty(vo.getVilleDepart()))
                item.setVilleDepart(vo.getVilleDepart());

            if (StringUtil.isNotEmpty(vo.getVilleArrivee()))
                item.setVilleArrivee(vo.getVilleArrivee());

            if (vo.getAvion() != null)
                item.setAvion(vo.getAvion());

            if (vo.getPilote() != null)
                item.setPilote(vo.getPilote());

            if (vo.getCompagnie() != null)
                item.setCompagnie(vo.getCompagnie());

            if (StringUtil.isNotEmpty(vo.getRetard()))
                item.setRetard(DateUtil.parseDateFr(vo.getRetard()));

            if (StringUtil.isNotEmpty(vo.getDateDepart()))
                item.setDateDepart(DateUtil.parseDateFr(vo.getDateDepart()));

            if (StringUtil.isNotEmpty(vo.getDateArrivee()))
                item.setDateArrivee(DateUtil.parseDateFr(vo.getDateArrivee()));
            return item;
        }
    }

    @Override
    public VolVo toVo(Vol item) {
        if (item == null) {
            return null;
        } else {
            VolVo vo = new VolVo();
            if (item.getId() != null)
                vo.setId(NumberUtil.toString(item.getId()));

            if (StringUtil.isNotEmpty(item.getNumVol()))
                vo.setNumVol(item.getNumVol());

            if (StringUtil.isNotEmpty(item.getVilleDepart()))
                vo.setVilleDepart(item.getVilleDepart());

            if (StringUtil.isNotEmpty(item.getVilleArrivee()))
                vo.setVilleArrivee(item.getVilleArrivee());

            if (item.getAvion() != null)
                vo.setAvion(item.getAvion());

            if (item.getPilote() != null)
                vo.setPilote(item.getPilote());

            if (item.getCompagnie() != null)
                vo.setCompagnie(item.getCompagnie());

            if (StringUtil.isNotEmpty(item.getRetard()))
                vo.setRetard(DateUtil.formateDate(item.getRetard()));

            if (StringUtil.isNotEmpty(item.getDateDepart()))
                vo.setDateDepart(DateUtil.formateDate(item.getDateDepart()));

            if (StringUtil.isNotEmpty(item.getDateArrivee()))
                vo.setDateArrivee(DateUtil.formateDate(item.getDateArrivee()));
            return vo;
        }
    }


    public void init(Boolean value) {
        
    }


}
package com.ana.test.ws.rest.provided.converter;

import com.ana.test.bean.Avion;
import com.ana.test.service.util.NumberUtil;
import com.ana.test.service.util.StringUtil;
import com.ana.test.ws.rest.provided.vo.AvionVo;
import org.springframework.stereotype.Component;

@Component
public class AvionConverter extends AbstractConverter<Avion, AvionVo> {

    public AvionConverter() {
        init(true);
    }
    @Override
    public Avion toItem(AvionVo vo) {
        if (vo == null) {
            return null;
        } else {
            Avion item = new Avion();
            if (StringUtil.isNotEmpty(vo.getId()))
                item.setId(NumberUtil.toLong(vo.getId()));

            if (StringUtil.isNotEmpty(vo.getCodeAvion()))
                item.setCodeAvion(vo.getCodeAvion());

            if (StringUtil.isNotEmpty(vo.getTypeAvion()))
                item.setTypeAvion(vo.getTypeAvion());

            if (StringUtil.isNotEmpty(vo.getModeleAvion()))
                item.setModeleAvion(vo.getModeleAvion());

            if (StringUtil.isNotEmpty(vo.getNbPassagers()))
                item.setNbPassagers(NumberUtil.toInt(vo.getNbPassagers()));
            return item;
        }
    }

    @Override
    public AvionVo toVo(Avion item) {
        if (item == null) {
            return null;
        } else {
            AvionVo vo = new AvionVo();
            if (item.getId() != null)
                vo.setId(NumberUtil.toString(item.getId()));

            if (StringUtil.isNotEmpty(item.getCodeAvion()))
                vo.setCodeAvion(item.getCodeAvion());

            if (StringUtil.isNotEmpty(item.getTypeAvion()))
                vo.setTypeAvion(item.getTypeAvion());

            if (StringUtil.isNotEmpty(item.getModeleAvion()))
                vo.setModeleAvion(item.getModeleAvion());

            if (StringUtil.isNotEmpty(item.getNbPassagers()))
                vo.setNbPassagers(NumberUtil.toString(item.getNbPassagers()));
            return vo;
        }
    }


    public void init(Boolean value) {
        
    }


}
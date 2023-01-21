package com.ana.test.ws.rest.provided.converter;

import com.ana.test.bean.Siege;
import com.ana.test.service.util.NumberUtil;
import com.ana.test.service.util.StringUtil;
import com.ana.test.ws.rest.provided.vo.SiegeVo;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;

@Component
public class SiegeConverter extends AbstractConverter<Siege, SiegeVo> {

    @Autowired
    private AvionConverter avionConverter;

    private Boolean avion;

    public SiegeConverter() {
        init(true);
    }
    @Override
    public Siege toItem(SiegeVo vo) {
        if (vo == null) {
            return null;
        } else {
            Siege item = new Siege();
            if (StringUtil.isNotEmpty(vo.getId()))
                item.setId(NumberUtil.toLong(vo.getId()));

            if (StringUtil.isNotEmpty(vo.getNumAllee()))
                item.setNumAllee(vo.getNumAllee());

            if (StringUtil.isNotEmpty(vo.getNumRang()))
                item.setNumRang(vo.getNumRang());

            if (StringUtil.isNotEmpty(vo.getClasse()))
                item.setClasse(vo.getClasse());

            if (vo.getAvionVo() != null && this.avion) {
                item.setAvion(avionConverter.toItem(vo.getAvionVo()));
             }
            return item;
        }
    }

    @Override
    public SiegeVo toVo(Siege item) {
        if (item == null) {
            return null;
        } else {
            SiegeVo vo = new SiegeVo();
            if (item.getId() != null)
                vo.setId(NumberUtil.toString(item.getId()));

            if (StringUtil.isNotEmpty(item.getNumAllee()))
                vo.setNumAllee(item.getNumAllee());

            if (StringUtil.isNotEmpty(item.getNumRang()))
                vo.setNumRang(item.getNumRang());

            if (StringUtil.isNotEmpty(item.getClasse()))
                vo.setClasse(item.getClasse());

            if (item.getAvion() != null && this.avion) {
                vo.setAvionVo(avionConverter.toVo(item.getAvion()));
            }
            return vo;
        }
    }


    public void init(Boolean value) {
        
    }

    public AvionConverter getAvionConverter() {
        return this.avionConverter;
    }

    public void setAvionConverter(AvionConverter avionConverter) {
        this.avionConverter = avionConverter;
    }

    public boolean isAvion() {
        return this.avion;
    }

    public void setAvion(boolean avion) {
        this.avion = avion;
    }
    


}
package com.ana.test.ws.rest.provided.converter;

import com.ana.test.bean.Billet;
import com.ana.test.service.util.NumberUtil;
import com.ana.test.service.util.StringUtil;
import com.ana.test.service.util.DateUtil;
import com.ana.test.ws.rest.provided.vo.BilletVo;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;

@Component
public class BilletConverter extends AbstractConverter<Billet, BilletVo> {

    @Autowired
    private PassagerConverter passagerConverter;

    private Boolean passager;

    @Autowired
    private SiegeConverter siegeConverter;

    private Boolean siege;

    @Autowired
    private VolConverter volConverter;

    private Boolean vol;

    public BilletConverter() {
        init(true);
    }
    @Override
    public Billet toItem(BilletVo vo) {
        if (vo == null) {
            return null;
        } else {
            Billet item = new Billet();
            if (StringUtil.isNotEmpty(vo.getId()))
                item.setId(NumberUtil.toLong(vo.getId()));

            if (StringUtil.isNotEmpty(vo.getNumBillet()))
                item.setNumBillet(vo.getNumBillet());

            if (StringUtil.isNotEmpty(vo.getCreatedAt()))
                item.setCreatedAt(DateUtil.parseDateFr(vo.getCreatedAt()));

            if (StringUtil.isNotEmpty(vo.getDateEmission()))
                item.setDateEmission(DateUtil.parseDateFr(vo.getDateEmission()));

            if (StringUtil.isNotEmpty(vo.getDatePaiment()))
                item.setDatePaiment(DateUtil.parseDateFr(vo.getDatePaiment()));

            if (StringUtil.isNotEmpty(vo.getDateReservation()))
                item.setDateReservation(DateUtil.parseDateFr(vo.getDateReservation()));

            if (vo.getPassagerVo() != null && this.passager) {
                item.setPassager(passagerConverter.toItem(vo.getPassagerVo()));
             }

            if (vo.getSiegeVo() != null && this.siege) {
                item.setSiege(siegeConverter.toItem(vo.getSiegeVo()));
             }

            if (vo.getVolVo() != null && this.vol) {
                item.setVol(volConverter.toItem(vo.getVolVo()));
             }
            return item;
        }
    }

    @Override
    public BilletVo toVo(Billet item) {
        if (item == null) {
            return null;
        } else {
            BilletVo vo = new BilletVo();
            if (item.getId() != null)
                vo.setId(NumberUtil.toString(item.getId()));

            if (StringUtil.isNotEmpty(item.getNumBillet()))
                vo.setNumBillet(item.getNumBillet());

            if (StringUtil.isNotEmpty(item.getCreatedAt()))
                vo.setCreatedAt(DateUtil.formateDate(item.getCreatedAt()));

            if (StringUtil.isNotEmpty(item.getDateEmission()))
                vo.setDateEmission(DateUtil.formateDate(item.getDateEmission()));

            if (StringUtil.isNotEmpty(item.getDatePaiment()))
                vo.setDatePaiment(DateUtil.formateDate(item.getDatePaiment()));

            if (StringUtil.isNotEmpty(item.getDateReservation()))
                vo.setDateReservation(DateUtil.formateDate(item.getDateReservation()));

            if (item.getPassager() != null && this.passager) {
                vo.setPassagerVo(passagerConverter.toVo(item.getPassager()));
            }

            if (item.getSiege() != null && this.siege) {
                vo.setSiegeVo(siegeConverter.toVo(item.getSiege()));
            }

            if (item.getVol() != null && this.vol) {
                vo.setVolVo(volConverter.toVo(item.getVol()));
            }
            return vo;
        }
    }


    public void init(Boolean value) {
        
    }

    public PassagerConverter getPassagerConverter() {
        return this.passagerConverter;
    }

    public void setPassagerConverter(PassagerConverter passagerConverter) {
        this.passagerConverter = passagerConverter;
    }

    public boolean isPassager() {
        return this.passager;
    }

    public void setPassager(boolean passager) {
        this.passager = passager;
    }
    

    public SiegeConverter getSiegeConverter() {
        return this.siegeConverter;
    }

    public void setSiegeConverter(SiegeConverter siegeConverter) {
        this.siegeConverter = siegeConverter;
    }

    public boolean isSiege() {
        return this.siege;
    }

    public void setSiege(boolean siege) {
        this.siege = siege;
    }
    

    public VolConverter getVolConverter() {
        return this.volConverter;
    }

    public void setVolConverter(VolConverter volConverter) {
        this.volConverter = volConverter;
    }

    public boolean isVol() {
        return this.vol;
    }

    public void setVol(boolean vol) {
        this.vol = vol;
    }
    


}
package com.ana.test.security.ws.converter;

import com.ana.test.security.bean.User;
import com.ana.test.service.util.DateUtil;
import com.ana.test.service.util.NumberUtil;
import com.ana.test.service.util.StringUtil;
import com.ana.test.ws.rest.provided.converter.AbstractConverter;
import com.ana.test.security.ws.vo.UserVo;
import org.springframework.stereotype.Component;

@Component
public class UserConverter extends AbstractConverter<User, UserVo> {

    private Boolean roles;
    private Boolean authorities;

    @Override
    public User toItem(UserVo vo) {
        if (vo == null) {
            return null;
        } else {
            User item = new User();
            if (StringUtil.isNotEmpty(vo.getId()))
                item.setId(NumberUtil.toLong(vo.getId()));

            if (StringUtil.isNotEmpty(vo.getEmail()))
                item.setEmail(vo.getEmail());

            if (StringUtil.isNotEmpty(vo.getNumeroMatricule()))
                item.setNumeroMatricule(vo.getNumeroMatricule());

            if (StringUtil.isNotEmpty(vo.getUsername()))
                item.setUsername(vo.getUsername());

            if (StringUtil.isNotEmpty(vo.getPassword()))
                item.setPassword(vo.getPassword());

            if (StringUtil.isNotEmpty(vo.getPrenom()))
                item.setPrenom(vo.getPrenom());

            if (StringUtil.isNotEmpty(vo.getRole()))
                item.setRole(vo.getRole());


            if (StringUtil.isNotEmpty(vo.getDateArchivage()))
                item.setDateArchivage(DateUtil.parseDateFr(vo.getDateArchivage()));

            if (StringUtil.isNotEmpty(vo.getCreatedAt()))
                item.setDateCreation(DateUtil.parseDateFr(vo.getCreatedAt()));


            if (item.getUpdatedAt() != null)
                vo.setUpdatedAt(DateUtil.formateDate(item.getUpdatedAt()));


            item.setArchive(vo.getArchive());

            return item;
        }
    }

    @Override
    public UserVo toVo(User item) {
        UserVo vo = new UserVo();

        if (item.getId() != null)
            vo.setId(NumberUtil.toString(item.getId()));

        if (StringUtil.isNotEmpty(item.getRole()))
            vo.setRole(item.getRole());

        if (StringUtil.isNotEmpty(item.getUsername()))
            vo.setUsername(item.getUsername());

        if (StringUtil.isNotEmpty(item.getNom()))
            vo.setNom(item.getNom());

        if (StringUtil.isNotEmpty(item.getPassword()))
            vo.setPassword(item.getPassword());

        if (StringUtil.isNotEmpty(item.getEmail()))
            vo.setEmail(item.getEmail());

        if (StringUtil.isNotEmpty(item.getNumeroMatricule()))
            vo.setNumeroMatricule(item.getNumeroMatricule());


        vo.setPasswordChanged(item.getPasswordChanged());

        vo.setEnabled(item.getEnabled());

        vo.setArchive(item.getArchive());


        if (item.getPrenom() != null)
            vo.setPrenom(item.getPrenom());

        if (item.getUpdatedAt() != null)
            vo.setUpdatedAt(DateUtil.formateDate(item.getUpdatedAt()));

        if (item.getDateArchivage() != null)
            vo.setDateArchivage(DateUtil.formateDate(item.getDateArchivage()));

        if (item.getDateCreation() != null)
            vo.setCreatedAt(DateUtil.formateDate(item.getDateCreation()));


        return vo;
    }

    public Boolean getRoles() {
        return roles;
    }

    public void setRoles(Boolean roles) {
        this.roles = roles;
    }

    public Boolean getAuthorities() {
        return authorities;
    }

    public void setAuthorities(Boolean authorities) {
        this.authorities = authorities;
    }
}

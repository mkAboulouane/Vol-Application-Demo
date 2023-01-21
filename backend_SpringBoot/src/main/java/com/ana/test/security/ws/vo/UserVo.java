package com.ana.test.security.ws.vo;

import com.ana.test.security.bean.Role;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Objects;

public class UserVo {

    protected String id;

    protected boolean credentialsNonExpired;
    protected boolean enabled;
    protected String createdAt;
    protected String numeroMatricule;
    protected String updatedAt;
    protected String email;
    protected boolean accountNonExpired;

    private String createdAtMax;
    private String createdAtMin;

    private String updatedAtMax;
    private String updatedAtMin;

    protected boolean accountNonLocked;
    protected String username;
    protected String password;
    protected String prenom;

    protected String nom;
    private Boolean archive = false;
    private String dateArchivage;

    private String dateArchivageMax;
    private String dateArchivageMin;

    protected boolean passwordChanged;

    private String role;

    protected Collection<Role> roles = new ArrayList<>();

    protected Collection<Role> authorities;

    public Boolean getArchive() {
        return archive;
    }

    public void setArchive(Boolean archive) {
        this.archive = archive;
    }

    public String getDateArchivage() {
        return dateArchivage;
    }

    public void setDateArchivage(String dateArchivage) {
        this.dateArchivage = dateArchivage;
    }

    public String getId() {
        return id;
    }


    public String getCreatedAtMax() {
        return createdAtMax;
    }

    public void setCreatedAtMax(String createdAtMax) {
        this.createdAtMax = createdAtMax;
    }

    public String getCreatedAtMin() {
        return createdAtMin;
    }

    public void setCreatedAtMin(String createdAtMin) {
        this.createdAtMin = createdAtMin;
    }

    public String getUpdatedAtMax() {
        return updatedAtMax;
    }

    public void setUpdatedAtMax(String updatedAtMax) {
        this.updatedAtMax = updatedAtMax;
    }

    public String getUpdatedAtMin() {
        return updatedAtMin;
    }

    public void setUpdatedAtMin(String updatedAtMin) {
        this.updatedAtMin = updatedAtMin;
    }

    public String getDateArchivageMax() {
        return dateArchivageMax;
    }

    public void setDateArchivageMax(String dateArchivageMax) {
        this.dateArchivageMax = dateArchivageMax;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserVo userVo = (UserVo) o;
        return Objects.equals(username, userVo.username);
    }

    @Override
    public int hashCode() {
        return Objects.hash(username);
    }

    public String getDateArchivageMin() {
        return dateArchivageMin;
    }

    public void setDateArchivageMin(String dateArchivageMin) {
        this.dateArchivageMin = dateArchivageMin;
    }

    public String getNumeroMatricule() {
        return numeroMatricule;
    }

    public void setNumeroMatricule(String numeroMatricule) {
        this.numeroMatricule = numeroMatricule;
    }

    public void setId(String id) {
        this.id = id;
    }

    public boolean isCredentialsNonExpired() {
        return credentialsNonExpired;
    }

    public void setCredentialsNonExpired(boolean credentialsNonExpired) {
        this.credentialsNonExpired = credentialsNonExpired;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public String getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean isAccountNonExpired() {
        return accountNonExpired;
    }

    public void setAccountNonExpired(boolean accountNonExpired) {
        this.accountNonExpired = accountNonExpired;
    }

    public boolean isAccountNonLocked() {
        return accountNonLocked;
    }

    public void setAccountNonLocked(boolean accountNonLocked) {
        this.accountNonLocked = accountNonLocked;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public boolean isPasswordChanged() {
        return passwordChanged;
    }

    public void setPasswordChanged(boolean passwordChanged) {
        this.passwordChanged = passwordChanged;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Collection<Role> getRoles() {
        return roles;
    }

    public void setRoles(Collection<Role> roles) {
        this.roles = roles;
    }

    public Collection<Role> getAuthorities() {
        return authorities;
    }

    public void setAuthorities(Collection<Role> authorities) {
        this.authorities = authorities;
    }
}

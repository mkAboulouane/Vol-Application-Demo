package com.ana.test.security.bean;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ana.test.bean.Archivable;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.Objects;


@Entity
@Table(name = "user_app")
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class User implements UserDetails, Archivable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "user_seq")
    protected Long id;

    protected boolean credentialsNonExpired;
    protected boolean enabled;
    @JsonFormat(pattern = "yyyy-MM-dd hh:mm:ss.SSS")
    @Temporal(TemporalType.TIMESTAMP)
    protected Date createdAt;
    @JsonFormat(pattern = "yyyy-MM-dd hh:mm:ss.SSS")
    @Temporal(TemporalType.TIMESTAMP)
    protected Date updatedAt;
    protected String email;
    protected boolean accountNonExpired;
    protected boolean accountNonLocked;
    protected String username;
    protected String password;
    protected String prenom;
    protected String nom;
    protected boolean passwordChanged;
    @Column(columnDefinition = "boolean default false")
    private Boolean archive = false;


    @JsonFormat(pattern = "yyyy-MM-dd hh:mm:ss.SSS")
    @Temporal(TemporalType.TIMESTAMP)
    private Date dateArchivage;

    @JsonFormat(pattern = "yyyy-MM-dd hh:mm:ss.SSS")
    @Temporal(TemporalType.TIMESTAMP)
    private Date dateCreation;


    @Transient
    private String role;

    @Transient
    protected String numeroMatricule;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "users_roles", joinColumns = {@JoinColumn(name = "USER_ID")}, inverseJoinColumns = {
            @JoinColumn(name = "ROLE_ID")})
    protected Collection<Role> roles = new ArrayList<>();

    @Transient
    protected Collection<Role> authorities;


    @Override
    public Date getDateCreation() {
        return dateCreation;
    }

    @Override
    public void setDateCreation(Date dateCreation) {
        this.dateCreation = dateCreation;
    }

    public String getNumeroMatricule() {
        return numeroMatricule;
    }

    public void setNumeroMatricule(String numeroMatricule) {
        this.numeroMatricule = numeroMatricule;
    }


    public Boolean getArchive() {
        return archive;
    }

    public void setArchive(Boolean archive) {
        this.archive = archive;
    }

    public Date getDateArchivage() {
        return dateArchivage;
    }

    public void setDateArchivage(Date dateArchivage) {
        this.dateArchivage = dateArchivage;
    }

    public User() {
        super();
    }

    public User(Long id, boolean credentialsNonExpired, boolean enabled, Date createdAt, Date updatedAt, String email, boolean accountNonExpired, boolean accountNonLocked, String username, String password, String prenom, String nom, boolean passwordChanged) {
        this.id = id;
        this.credentialsNonExpired = credentialsNonExpired;
        this.enabled = enabled;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.email = email;
        this.accountNonExpired = accountNonExpired;
        this.accountNonLocked = accountNonLocked;
        this.username = username;
        this.password = password;
        this.prenom = prenom;
        this.nom = nom;
        this.passwordChanged = passwordChanged;
    }

    public User(String username, String password) {
        this.username = username;
        this.password = password;
        this.prenom = username;
        this.nom = username;
        this.email = username;
    }


    public boolean getCredentialsNonExpired() {
        return credentialsNonExpired;
    }

    public boolean getEnabled() {
        return enabled;
    }

    public boolean getAccountNonExpired() {
        return accountNonExpired;
    }

    public boolean getAccountNonLocked() {
        return accountNonLocked;
    }

    public boolean getPasswordChanged() {
        return passwordChanged;
    }


    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isCredentialsNonExpired() {
        return credentialsNonExpired;
    }

    public void setCredentialsNonExpired(boolean credentialsNonExpired) {
        this.credentialsNonExpired = credentialsNonExpired;
    }


    public Collection<Role> getRoles() {
        return roles;
    }

    public void setRoles(Collection<Role> roles) {
        this.roles = roles;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
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


    public Collection<Role> getAuthorities() {
        if (this.authorities == null)
            this.authorities = this.roles;

        return authorities;
    }

    public void setAuthorities(Collection<Role> authorities) {
        this.authorities = authorities;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isPasswordChanged() {
        return passwordChanged;
    }

    public void setPasswordChanged(boolean passwordChanged) {
        this.passwordChanged = passwordChanged;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(username, user.username);
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", credentialsNonExpired=" + credentialsNonExpired +
                ", enabled=" + enabled +
                ", createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                ", email='" + email + '\'' +
                ", accountNonExpired=" + accountNonExpired +
                ", accountNonLocked=" + accountNonLocked +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", prenom='" + prenom + '\'' +
                ", nom='" + nom + '\'' +
                ", passwordChanged=" + passwordChanged +
                ", archive=" + archive +
                ", dateArchivage=" + dateArchivage +
                ", dateCreation=" + dateCreation +
                ", role='" + role + '\'' +
                ", numeroMatricule='" + numeroMatricule + '\'' +
                ", roles=" + roles +
                ", authorities=" + authorities +
                '}';
    }

    @Override
    public int hashCode() {
        return Objects.hash(username);
    }
}

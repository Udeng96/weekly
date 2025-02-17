package com.weekly.weekly.data.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;



@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "USER", schema = "WEEKLY")
public class User {

    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "pwd")
    private String pwd;

    @Column(name = "name")
    private String name;

    @Column(name = "birth")
    private String birth;

    @Column(name = "depart")
    private String depart;

    @Column(name = "rank")
    private String rank;

    @Column(name = "email")
    private String email;

    @Column(name = "tel")
    private String tel;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBirth() {
        return birth;
    }

    public void setBirth(String birth) {
        this.birth = birth;
    }

    public String getDepart() {
        return depart;
    }

    public void setDepart(String depart) {
        this.depart = depart;
    }

    public String getRank() {
        return rank;
    }

    public void setRank(String rank) {
        this.rank = rank;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }
}

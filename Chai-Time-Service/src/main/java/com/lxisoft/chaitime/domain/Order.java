package com.lxisoft.chaitime.domain;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Order.
 */
@Entity
@Table(name = "jhi_order")
public class Order implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "idpcode")
    private String idpcode;

    @Column(name = "jhi_date")
    private Instant date;

    @Column(name = "total")
    private Long total;

    @OneToOne
    @JoinColumn(unique = true)
    private Seller seller;

    @OneToMany(mappedBy = "order")
    private Set<Beverage> beverages = new HashSet<>();
    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIdpcode() {
        return idpcode;
    }

    public Order idpcode(String idpcode) {
        this.idpcode = idpcode;
        return this;
    }

    public void setIdpcode(String idpcode) {
        this.idpcode = idpcode;
    }

    public Instant getDate() {
        return date;
    }

    public Order date(Instant date) {
        this.date = date;
        return this;
    }

    public void setDate(Instant date) {
        this.date = date;
    }

    public Long getTotal() {
        return total;
    }

    public Order total(Long total) {
        this.total = total;
        return this;
    }

    public void setTotal(Long total) {
        this.total = total;
    }

    public Seller getSeller() {
        return seller;
    }

    public Order seller(Seller seller) {
        this.seller = seller;
        return this;
    }

    public void setSeller(Seller seller) {
        this.seller = seller;
    }

    public Set<Beverage> getBeverages() {
        return beverages;
    }

    public Order beverages(Set<Beverage> beverages) {
        this.beverages = beverages;
        return this;
    }

    public Order addBeverage(Beverage beverage) {
        this.beverages.add(beverage);
        beverage.setOrder(this);
        return this;
    }

    public Order removeBeverage(Beverage beverage) {
        this.beverages.remove(beverage);
        beverage.setOrder(null);
        return this;
    }

    public void setBeverages(Set<Beverage> beverages) {
        this.beverages = beverages;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Order order = (Order) o;
        if (order.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), order.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Order{" +
            "id=" + getId() +
            ", idpcode='" + getIdpcode() + "'" +
            ", date='" + getDate() + "'" +
            ", total=" + getTotal() +
            "}";
    }
}

package com.srm.finance.starfinance.EntityModel;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "Goldloancalc")
@Entity
public class Goldloancalc {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
   private Long id;
    @Column(name = "ornamentname")
    private String ornamentname;

    @Column(name = "netweight")
    private Float netweight;

    @Column(name = "pricepergram")
    private Integer pricepergram;

    @Column(name = "carattype")
    private Integer carattype;

    @Column(name = "totalamt")
    private Float totalamount;

    @Column(name = "elgibileamt")
    private Float eligibleamt;

    public Goldloancalc(String ornamentname, Float netweight, Integer pricepergram, Integer carattype,
            Float totalamount, Float elgibileamt) {
        this.ornamentname = ornamentname;
        this.netweight = netweight;
        this.pricepergram = pricepergram;
        this.carattype = carattype;
        this.totalamount = totalamount;
        this.eligibleamt = elgibileamt;
    }

    public String getOrnamentname() {
        return ornamentname;
    }

    public void setOrnamentname(String ornamentname) {
        this.ornamentname = ornamentname;
    }

    public Float getNetweight() {
        return netweight;
    }

    public void setNetweight(Float netweight) {
        this.netweight = netweight;
    }

    public Integer getPricepergram() {
        return pricepergram;
    }

    public void setPricepergram(Integer pricepergram) {
        this.pricepergram = pricepergram;
    }

    public Integer getCarattype() {
        return carattype;
    }

    public void setCarattype(Integer carattype) {
        this.carattype = carattype;
    }

    public Float getTotalamount() {
        return totalamount;
    }

    public void setTotalamount(Float totalamount) {
        this.totalamount = totalamount;
    }

    public Float getEligibleamt() {
        return eligibleamt;
    }

    public void setElgibileamt(Float eligibleamt) {
        this.eligibleamt = eligibleamt;
    }

    @Override
    public String toString() {
        return "Goldloancalc [carattype=" + carattype + ", eligibleamt=" + eligibleamt + ", id=" + id + ", netweight="
                + netweight + ", ornamentname=" + ornamentname + ", pricepergram=" + pricepergram + ", totalamount="
                + totalamount + "]";
    }

    

}

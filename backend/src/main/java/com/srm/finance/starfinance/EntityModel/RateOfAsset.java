package com.srm.finance.starfinance.EntityModel;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="rate_of_asset")
public class RateOfAsset {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer asset_id;
    private Double price;
    private Double weight;
    private String type_of_gold;
    private String current_date_time;
    public Integer getAsset_id() {
        return asset_id;
    }
    public void setAsset_id(Integer asset_id) {
        this.asset_id = asset_id;
    }
    public Double getPrice() {
        return price;
    }
    public void setPrice(Double price) {
        this.price = price;
    }
    public Double getWeight() {
        return weight;
    }
    public void setWeight(Double weight) {
        this.weight = weight;
    }
    public String getType_of_gold() {
        return type_of_gold;
    }
    public void setType_of_gold(String type_of_gold) {
        this.type_of_gold = type_of_gold;
    }
    public String getCurrent_date_time() {
        return current_date_time;
    }
    public void setCurrent_date_time(String current_date_time) {
        this.current_date_time = current_date_time;
    }
    public RateOfAsset(Double price, Double weight, String type_of_gold, String current_date_time) {
        this.price = price;
        this.weight = weight;
        this.type_of_gold = type_of_gold;
        this.current_date_time = current_date_time;
    }
    
    
}

package com.srm.finance.starfinance.EntityModel;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import org.hibernate.annotations.GenericGenerator;
@Entity
@Table(name="register")
public class Register {
    @Id
    @GenericGenerator(name="cust_id",strategy = "com.srm.finance.starfinance.CustomIdGenerator.CustomerId")
    @GeneratedValue(generator="cust_id")
    private String cust_id;
    @Column(name="customer_name")
    private String customer_name;
    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JoinColumn(name = "cust_id")
    private List<CommonLoanData> goldloan;
    private String email;
    @Column(unique = true)
    private Long phone_no;
    public String getCust_id() {
        return cust_id;
    }
    public void setCust_id(String cust_id) {
        this.cust_id = cust_id;
    }
    public String getCustomer_name() {
        return customer_name;
    }
    public void setCustomer_name(String customer_name) {
        this.customer_name = customer_name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public Register(String customer_name, String email, Long phone_no) {
        this.customer_name = customer_name;
        this.email = email;
        this.phone_no = phone_no;
    }
    public Long getPhone_no() {
        return phone_no;
    }
    public void setPhone_no(Long phone_no) {
        this.phone_no = phone_no;
    }
    
}

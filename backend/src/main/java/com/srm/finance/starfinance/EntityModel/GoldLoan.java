package com.srm.finance.starfinance.EntityModel;
import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class GoldLoan extends CommonLoanData {
    @Column(name="purpose")
    private String purpose;
    @Column(name="type_of_gold")
    private String type_of_gold;
    @Column(name="no_of_ornaments")
    private Integer number_of_ornaments;
    @Column(name="tenure")
    private Float tenure;
    @Column(name="loan_amount")
    private Double loan_amount;
    @Column(name="account_holder_name")
    private String account_holder_name;
    @Column(name="account_number")
    private Long account_number;
    @Column(name="branch_name")
    private String branch_name;
    @Column(name="ifsc_code")
    private Long ifsc_code;
    @Column(name="payment_mode")
    private String payment_mode;
    @Column(name="mode_of_disbursal")
    private String mode_of_disbursal;
    public String getPurpose() {
        return purpose;
    }
    public void setPurpose(String purpose) {
        this.purpose = purpose;
    }
    public String getType_of_gold() {
        return type_of_gold;
    }
    public void setType_of_gold(String type_of_gold) {
        this.type_of_gold = type_of_gold;
    }
    public Integer getNumber_of_ornaments() {
        return number_of_ornaments;
    }
    public void setNumber_of_ornaments(Integer number_of_ornaments) {
        this.number_of_ornaments = number_of_ornaments;
    }
    public Float getTenure() {
        return tenure;
    }
    public void setTenure(Float tenure) {
        this.tenure = tenure;
    }
    public Double getLoan_amount() {
        return loan_amount;
    }
    public void setLoan_amount(Double loan_amount) {
        this.loan_amount = loan_amount;
    }
    public String getAccount_holder_name() {
        return account_holder_name;
    }
    public void setAccount_holder_name(String account_holder_name) {
        this.account_holder_name = account_holder_name;
    }
    public Long getAccount_number() {
        return account_number;
    }
    public void setAccount_number(Long account_number) {
        this.account_number = account_number;
    }
    public String getBranch_name() {
        return branch_name;
    }
    public void setBranch_name(String branch_name) {
        this.branch_name = branch_name;
    }
    public Long getIfsc_code() {
        return ifsc_code;
    }
    public void setIfsc_code(Long ifsc_code) {
        this.ifsc_code = ifsc_code;
    }
    public String getPayment_mode() {
        return payment_mode;
    }
    public void setPayment_mode(String payment_mode) {
        this.payment_mode = payment_mode;
    }
    public String getMode_of_disbursal() {
        return mode_of_disbursal;
    }
    public void setMode_of_disbursal(String mode_of_disbursal) {
        this.mode_of_disbursal = mode_of_disbursal;
    }
    
    public GoldLoan(String applicant_name, String date_of_birth, Integer age, String gender, Long phone_number,
            Long landline, String religion, String community, String nationality, String email_id,
            String martial_status, String education, byte[] photo_upload, byte[] digital_sign, Double annual_income,
            String tAddr, Integer tpin, String pAddr, Integer ppin, String occupation, String deoccupation,
            String requiredLoan, String contact, String purpose, String type_of_gold, Integer number_of_ornaments,
            Float tenure, Double loan_amount, String account_holder_name, Long account_number, String branch_name,
            Long ifsc_code, String payment_mode, String mode_of_disbursal) {
        super(applicant_name, date_of_birth, age, gender, phone_number, landline, religion, community, nationality,
                email_id, martial_status, education, photo_upload, digital_sign, annual_income, tAddr, tpin, pAddr,
                ppin, occupation, deoccupation, requiredLoan, contact);
        this.purpose = purpose;
        this.type_of_gold = type_of_gold;
        this.number_of_ornaments = number_of_ornaments;
        this.tenure = tenure;
        this.loan_amount = loan_amount;
        this.account_holder_name = account_holder_name;
        this.account_number = account_number;
        this.branch_name = branch_name;
        this.ifsc_code = ifsc_code;
        this.payment_mode = payment_mode;
        this.mode_of_disbursal = mode_of_disbursal;
    }
    public GoldLoan(){}
    @Override
    public String toString() {
        return "GoldLoan [account_holder_name=" + account_holder_name + ", account_number=" + account_number
                + ", branch_name=" + branch_name + ", ifsc_code=" + ifsc_code + ", loan_amount=" + loan_amount
                + ", mode_of_disbursal=" + mode_of_disbursal + ", number_of_ornaments=" + number_of_ornaments
                + ", payment_mode=" + payment_mode + ", purpose=" + purpose + ", tenure=" + tenure + ", type_of_gold="
                + type_of_gold + "]";
    }
  
    
}


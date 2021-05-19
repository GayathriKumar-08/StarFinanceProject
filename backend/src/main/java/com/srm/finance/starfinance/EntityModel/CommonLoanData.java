package com.srm.finance.starfinance.EntityModel;

import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Lob;
import javax.persistence.Table;
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name="CommonLoanData")
@Entity
public class CommonLoanData  {
    
    
    @Id
    // @GenericGenerator(name="loan_number",strategy = "com.srm.finance.starfinance.CustomIdGenerator.LoanNumberGenerator")
    // @GeneratedValue(generator="loan_number")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long loan_number;
    @Column(name = "applicant_name")
    private String applicant_name;
    @Column(name = "dob")
    private String date_of_birth;
    @Column(name = "age")
    private Integer age;
    @Column(name = "gender")
    private String gender;
    @Column(name = "phone_number")
    private Long phone_number;
    @Column(name = "landline")
    private Long landline;
    @Column(name = "religion")
    private String religion;
    @Column(name = "community")
    private String community;
    @Column(name = "nationality")
    private String nationality;
    @Column(name = "email_id")
    private String email_id;
    @Column(name = "martial_status")
    private  String martial_status;
    @Column(name = "education")
    private String education;
    @Lob
    @Column(name = "photo_upload")
    private byte[] photo_upload;
    @Lob
    @Column(name = "digital_sign")
    private byte[] digital_sign;
    @Column(name = "annual_income")
    private Double annual_income;
    @Column(name="tempAddress")
    private String tAddr;
    @Column(name="tempPincode")
    private Integer tpin;
    @Column(name="pemAddress")
    private String pAddr;
    @Column(name="pemPincode")
    private Integer ppin;
    @Column(name="occupation")
    private String occupation;
    @Column(name="details")
    private String deoccupation;
    @Column(name="required_loan")
    private String requiredLoan;
    @Column(name="contact")
    private String contact;
    public String getEducation() {
        return education;
    }
    public void setEducation(String education) {
        this.education = education;
    }
    public String gettAddr() {
        return tAddr;
    }
    public void settAddr(String tAddr) {
        this.tAddr = tAddr;
    }
    public Integer getTpin() {
        return tpin;
    }
    public void setTpin(Integer tpin) {
        this.tpin = tpin;
    }
    public String getpAddr() {
        return pAddr;
    }
    public void setpAddr(String pAddr) {
        this.pAddr = pAddr;
    }
    public Integer getPpin() {
        return ppin;
    }
    public void setPpin(Integer ppin) {
        this.ppin = ppin;
    }
    public String getOccupation() {
        return occupation;
    }
    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }
    public String getDeoccupation() {
        return deoccupation;
    }
    public void setDeoccupation(String deoccupation) {
        this.deoccupation = deoccupation;
    }
    public String getRequiredLoan() {
        return requiredLoan;
    }
    public void setRequiredLoan(String requiredLoan) {
        this.requiredLoan = requiredLoan;
    }
    public String getContact() {
        return contact;
    }
    public void setContact(String contact) {
        this.contact = contact;
    }
    public String getApplicant_name() {
        return applicant_name;
    }
    public Long getId() {
        return loan_number;
    }
    public void setId(Long loan_number) {
        this.loan_number = loan_number;
    }
    public void setApplicant_name(String applicant_name) {
        this.applicant_name = applicant_name;
    }
    public String getDate_of_birth() {
        return date_of_birth;
    }
    public void setDate_of_birth(String date_of_birth) {
        this.date_of_birth = date_of_birth;
    }
    public Integer getAge() {
        return age;
    }
    public void setAge(Integer age) {
        this.age = age;
    }
    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }
    public Long getPhone_number() {
        return phone_number;
    }
    public void setPhone_number(Long phone_number) {
        this.phone_number = phone_number;
    }
    public Long getLandline() {
        return landline;
    }
    public void setLandline(Long landline) {
        this.landline = landline;
    }
    public String getReligion() {
        return religion;
    }
    public void setReligion(String religion) {
        this.religion = religion;
    }
    public String getEmail_id() {
        return email_id;
    }
    public void setEmail_id(String email_id) {
        this.email_id = email_id;
    }
    public String getMartial_status() {
        return martial_status;
    }
    public void setMartial_status(String martial_status) {
        this.martial_status = martial_status;
    }
    
    public byte[] getPhoto_upload() {
        return photo_upload;
    }
    public void setPhoto_upload(byte[] photo_upload) {
        this.photo_upload = photo_upload;
    }
    public byte[] getDigital_sign() {
        return digital_sign;
    }
    public void setDigital_sign(byte[] digital_sign) {
        this.digital_sign = digital_sign;
    }
    public Double getAnnual_income() {
        return annual_income;
    }
    public void setAnnual_income(Double annual_income) {
        this.annual_income = annual_income;
    }
     
    public CommonLoanData(String applicant_name, String date_of_birth, Integer age, String gender, Long phone_number,
            Long landline, String religion, String community, String nationality, String email_id,
            String martial_status, String education, byte[] photo_upload, byte[] digital_sign, Double annual_income,
            String tAddr, Integer tpin, String pAddr, Integer ppin, String occupation, String deoccupation,
            String requiredLoan, String contact) {
        this.applicant_name = applicant_name;
        this.date_of_birth = date_of_birth;
        this.age = age;
        this.gender = gender;
        this.phone_number = phone_number;
        this.landline = landline;
        this.religion = religion;
        this.community = community;
        this.nationality = nationality;
        this.email_id = email_id;
        this.martial_status = martial_status;
        this.education = education;
        this.photo_upload = photo_upload;
        this.digital_sign = digital_sign;
        this.annual_income = annual_income;
        this.tAddr = tAddr;
        this.tpin = tpin;
        this.pAddr = pAddr;
        this.ppin = ppin;
        this.occupation = occupation;
        this.deoccupation = deoccupation;
        this.requiredLoan = requiredLoan;
        this.contact = contact;
    }
    public String getCommunity() {
        return community;
    }
    public void setCommunity(String community) {
        this.community = community;
    }
    public String getNationality() {
        return nationality;
    }
    public void setNationality(String nationality) {
        this.nationality = nationality;
    }
    public CommonLoanData(){}
    @Override
    public String toString() {
        return "CommonLoanData [age=" + age + ", annual_income=" + annual_income + ", applicant_name=" + applicant_name
                + ", community=" + community + ", contact=" + contact + ", date_of_birth=" + date_of_birth
                + ", deoccupation=" + deoccupation + ", digital_sign=" + Arrays.toString(digital_sign) + ", education="
                + education + ", email_id=" + email_id + ", gender=" + gender + ", landline=" + landline
                + ", loan_number=" + loan_number + ", martial_status=" + martial_status + ", nationality=" + nationality
                + ", occupation=" + occupation + ", pAddr=" + pAddr + ", phone_number=" + phone_number
                + ", photo_upload=" + Arrays.toString(photo_upload) + ", ppin=" + ppin + ", religion=" + religion
                + ", requiredLoan=" + requiredLoan + ", tAddr=" + tAddr + ", tpin=" + tpin + "]";
    }
    
}


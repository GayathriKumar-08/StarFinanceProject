package com.srm.finance.starfinance.Service;

import java.util.List;

import javax.transaction.Transactional;

import com.srm.finance.starfinance.EntityModel.CommonLoanData;
import com.srm.finance.starfinance.EntityModel.GoldLoan;
import com.srm.finance.starfinance.Repository.GoldLoanRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class LoanService implements LoanServ{
    @Autowired
    private GoldLoanRepo loanrepo;
    
    public void save(GoldLoan goldloan)
    {
        loanrepo.save(goldloan);
    }
    public GoldLoan get(Long loan_number) {
        return (GoldLoan) loanrepo.findById(loan_number).get();
    }
    
    public void updateLoan(Long loan_number,GoldLoan gl) {
        GoldLoan gl1= (GoldLoan) loanrepo.findById(loan_number).get();
        System.out.println(gl1.toString());
        gl1.setApplicant_name(gl.getApplicant_name());
        gl1.setAccount_holder_name(gl.getAccount_holder_name());
        gl1.setAccount_number(gl.getAccount_number());
        gl1.setAge(gl.getAge());
        gl1.setAnnual_income(gl.getAnnual_income());
        gl1.setBranch_name(gl.getBranch_name());
        gl1.setCommunity(gl.getCommunity());
        gl1.setEmail_id(gl.getEmail_id());
        gl1.setDate_of_birth(gl.getDate_of_birth());
        gl1.setDigital_sign(gl.getDigital_sign());
        gl1.setIfsc_code(gl.getIfsc_code());
        gl1.setLandline(gl.getLandline());
        gl1.setLoan_amount(gl.getLoan_amount());
        gl1.setMode_of_disbursal(gl.getMode_of_disbursal());
        gl1.setEducation(gl.getEducation());
        gl1.setPayment_mode(gl.getPayment_mode());
        gl1.setPhone_number(gl.getPhone_number());
        gl1.setMartial_status(gl.getMartial_status());
        gl1.setNationality(gl.getNationality());
        gl1.setNumber_of_ornaments(gl.getNumber_of_ornaments());
        gl1.setPhoto_upload(gl.getPhoto_upload());
        gl1.setPurpose(gl.getPurpose());
        gl1.setTenure(gl.getTenure());
        gl1.setType_of_gold(gl.getType_of_gold());
        gl1.setReligion(gl.getReligion());
        gl1.setGender(gl.getGender());
        gl1.settAddr(gl.gettAddr());
        gl1.setTpin(gl.getTpin());
        gl1.setpAddr(gl.getpAddr());
        gl1.setPpin(gl.getPpin());
        gl1.setRequiredLoan(gl.getRequiredLoan());
        gl1.setOccupation(gl.getOccupation());
        gl1.setDeoccupation(gl.getDeoccupation());
        gl1.setContact(gl.getContact());
        loanrepo.save(gl1);
          
    }
    public void deleteByLoanId(Long loan_number)
    {
       loanrepo.deleteById(loan_number);
    }
   
    public Iterable<CommonLoanData> fetchAllData()
    {
       return loanrepo.findAll();
    }
    
    public List<GoldLoan> getData()
    {
    	return loanrepo.getData();
    }
    public List<GoldLoan> getByLoan(String requiredLoan)
    {
    	List<GoldLoan> ls=loanrepo.fetchByLoanType(requiredLoan);
    	System.out.println(ls);
    	return loanrepo.fetchByLoanType(requiredLoan);
    }
}

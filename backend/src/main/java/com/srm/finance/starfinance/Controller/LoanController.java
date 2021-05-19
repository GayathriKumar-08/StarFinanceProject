package com.srm.finance.starfinance.Controller;

import java.util.List;
import java.util.NoSuchElementException;


import com.srm.finance.starfinance.EntityModel.CommonLoanData;
import com.srm.finance.starfinance.EntityModel.GoldLoan;
import com.srm.finance.starfinance.Repository.GoldLoanRepo;
import com.srm.finance.starfinance.Service.LoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class LoanController {
    @Autowired
    private GoldLoanRepo loanRepo;
    @Autowired
    private LoanService loanServ;
    @PostMapping("/goldloanform")
    public void add(@RequestBody GoldLoan goldLoan) {
    loanServ.save(goldLoan);
    }

@GetMapping("/goldloanform/{loan_number}")
public ResponseEntity<GoldLoan> get(@PathVariable Long loan_number) {
    try {
        GoldLoan goldLoan = loanServ.get(loan_number);
        System.out.println(goldLoan.toString());
        return new ResponseEntity<GoldLoan>(goldLoan, HttpStatus.OK);
        
    } catch (NoSuchElementException e) {
        return new ResponseEntity<GoldLoan>(HttpStatus.NOT_FOUND);
    }  

   
} 
@PutMapping("/goldloanform/{loan_number}")
public ResponseEntity<GoldLoan> updateLoanData(@PathVariable Long loan_number,@RequestBody GoldLoan goldloan) {
    try {
       loanServ.updateLoan(loan_number, goldloan);
       System.out.println(goldloan.toString());
       return new ResponseEntity<>(loanServ.get(loan_number),HttpStatus.OK);
    } catch (NoSuchElementException e) {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }      
}    
@DeleteMapping({"/goldloanform/{loan_number}"})
public ResponseEntity<GoldLoan> deleteByLoanNum(@PathVariable("loan_number") Long loan_number) {
    loanServ.deleteByLoanId(loan_number);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
}
@GetMapping("/goldloanform")
public Iterable<CommonLoanData> list() {
    return loanServ.fetchAllData();
}

@GetMapping("/fetchloandata")
public List<GoldLoan> fetchByLoan() {

    return loanServ.getData();

}


@GetMapping("/fetchByLoanType/{requiredLoan}")
public List<GoldLoan> fetchByLoan(@PathVariable("requiredLoan") String requiredLoan)
{
	return loanServ.getByLoan(requiredLoan);
}
}

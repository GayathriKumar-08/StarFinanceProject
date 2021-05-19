package com.srm.finance.starfinance.Repository;


import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.srm.finance.starfinance.EntityModel.GoldLoan;

@Repository
public interface GoldLoanRepo extends CommonLoanRepo {

    @Query("select g from GoldLoan g where g.annual_income>=200000")
    public List<GoldLoan> getData();
  
    @Query("select g from GoldLoan g where g.requiredLoan=:requiredLoan")
    public List<GoldLoan> fetchByLoanType(@Param("requiredLoan") String requiredLoan);
    
    Date d=new Date();
    SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");
    String cd=sdf.format(d);
    
//    @Query("select g from GolLoan g where g.curDate = CURRENT_DATE")
//    public List<GoldLoan> fetchByCurDate();
}

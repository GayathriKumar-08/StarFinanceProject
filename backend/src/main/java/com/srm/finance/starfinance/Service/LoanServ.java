package com.srm.finance.starfinance.Service;

import com.srm.finance.starfinance.EntityModel.CommonLoanData;
import com.srm.finance.starfinance.EntityModel.GoldLoan;

public interface LoanServ {
	 public void save(GoldLoan goldloan);
	 public GoldLoan get(Long loan_number);
	 public void updateLoan(Long loan_number,GoldLoan gl);
	 public void deleteByLoanId(Long loan_number);
	 public Iterable<CommonLoanData> fetchAllData();
}

package com.srm.finance.starfinance.Repository;

import java.io.Serializable;
import com.srm.finance.starfinance.EntityModel.CommonLoanData;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommonLoanRepo extends CrudRepository<CommonLoanData,Serializable>{
    
}

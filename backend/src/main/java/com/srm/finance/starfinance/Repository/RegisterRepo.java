package com.srm.finance.starfinance.Repository;

import com.srm.finance.starfinance.EntityModel.Register;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface RegisterRepo extends JpaRepository<Register,Long>{
       

}

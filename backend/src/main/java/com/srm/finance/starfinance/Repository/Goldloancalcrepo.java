package com.srm.finance.starfinance.Repository;
import com.srm.finance.starfinance.EntityModel.Goldloancalc;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Goldloancalcrepo extends JpaRepository<Goldloancalc,Integer> {
    
}

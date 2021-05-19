package com.srm.finance.starfinance.Service;
import com.srm.finance.starfinance.EntityModel.Goldloancalc;
import com.srm.finance.starfinance.Repository.Goldloancalcrepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class Goldloancalcservice implements GoldloancalcServ{
    @Autowired
    private Goldloancalcrepo grepo;

    public void save(Goldloancalc goldloancalc)
    {
        grepo.save(goldloancalc);
    }
}

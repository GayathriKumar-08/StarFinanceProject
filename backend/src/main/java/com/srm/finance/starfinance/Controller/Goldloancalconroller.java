package com.srm.finance.starfinance.Controller;

import com.srm.finance.starfinance.Service.Goldloancalcservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import com.srm.finance.starfinance.EntityModel.Goldloancalc;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api")
public class Goldloancalconroller {
    @Autowired
    private Goldloancalcservice gservice;
   
    @PostMapping("/Goldloancalc")
    public void add(@RequestBody Goldloancalc goldloancalc)
    {
          gservice.save(goldloancalc);
    }
}

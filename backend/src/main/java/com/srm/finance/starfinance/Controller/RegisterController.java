package com.srm.finance.starfinance.Controller;
import org.springframework.web.bind.annotation.RestController;
import com.srm.finance.starfinance.EntityModel.Register;
import com.srm.finance.starfinance.Repository.RegisterRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class RegisterController {
    @Autowired
    private RegisterRepo registerRepo;
    @PostMapping(value="/register")
    public ResponseEntity<Register> submitData(@RequestBody Register reg)
    {
        try{
            Register r=registerRepo.save(new Register(reg.getCustomer_name(),reg.getEmail(),reg.getPhone_no()));
            return new ResponseEntity<>(r,HttpStatus.CREATED);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        
    }
    
}

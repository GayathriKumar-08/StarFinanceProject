package com.srm.finance.Controller;

import com.srm.finance.Services.PhoneVerification;
import com.srm.finance.Services.VerificationData;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import org.springframework.web.servlet.ModelAndView;


@Controller

public class TwilioController {
    @Autowired
	PhoneVerification phonesmsservice;
	@RequestMapping("/")
	public String loginPage(ModelAndView model)
	{
		return "loginpage";
	}
	@PostMapping("/sendotp")
	public ResponseEntity<String> sendotp(@RequestParam("phone") String phone)
	{
	    VerificationData result=phonesmsservice.startVerification(phone);
	    if(result.isValid())
	    {
	    	return new ResponseEntity<>("Otp Sent..",HttpStatus.OK);
	    }
		return new ResponseEntity<>("Otp failed to sent..",HttpStatus.BAD_REQUEST);
	}
	
	@PostMapping("/verifyotp")
	public ResponseEntity<String> sendotp(@RequestParam("phone") String phone, @RequestParam("otp") String otp)
	{
	    VerificationData result=phonesmsservice.checkverification(phone,otp);
	    if(result.isValid())
	    {
	    	return new ResponseEntity<>("Your number is Verified",HttpStatus.OK);
	    }
		return new ResponseEntity<>("Something wrong/ Otp incorrect",HttpStatus.BAD_REQUEST);
	}
	
}

package com.srm.finance.starfinance.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.srm.finance.starfinance.EntityModel.Register;
import com.srm.finance.starfinance.Repository.RegisterRepo;

@Service
public class RegisterServImpl implements RegisterServ{

	@Autowired
	private RegisterRepo registerRepo;

	@Override
	public Register saveData(Register reg) {
		return registerRepo.save(reg);
		
	}
	
	
}

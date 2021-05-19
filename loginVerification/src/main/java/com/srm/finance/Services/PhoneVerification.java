package com.srm.finance.Services;

import com.srm.finance.Controller.TwilioProperties;
import com.twilio.exception.ApiException;
import com.twilio.rest.verify.v2.service.Verification;
import com.twilio.rest.verify.v2.service.VerificationCheck;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PhoneVerification {
    private final TwilioProperties twilioproperties;

	@Autowired
	public PhoneVerification(TwilioProperties twilioproperties) {
		this.twilioproperties=twilioproperties;
	}
	
	
	//method to send to otp
    public VerificationData startVerification(String phone)  {
        try {
            Verification verification = Verification.creator(twilioproperties.getService_id(), phone, "sms").create();
            if("approved".equals(verification.getStatus())|| "pending".equals(verification.getStatus())) {
			return new VerificationData(verification.getSid());
			}
        } catch (ApiException exception) {
            return new VerificationData(new String[] {exception.getMessage()});
        }
        return null;
    }

    //mehtod to verifiy the otp
    public VerificationData checkverification(String phone, String code) {
        try {
            VerificationCheck verification = VerificationCheck.creator(twilioproperties.getService_id(), code).setTo(phone).create();
            if("approved".equals(verification.getStatus())) {
                return new VerificationData(verification.getSid());
            }
            return new VerificationData(new String[]{"Invalid code."});
        } catch (ApiException exception) {
            return new VerificationData(new String[]{exception.getMessage()});
        }
    }
	
}

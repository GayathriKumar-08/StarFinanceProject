package com.srm.finance.Controller;

import com.twilio.Twilio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

@Configuration
public class TwilioInitializer {
    
    private final TwilioProperties tp;
    @Autowired
    public TwilioInitializer(TwilioProperties tp)
    {
        this.tp=tp;
        Twilio.init(tp.getAccount_sid(),tp.getAuth_token());
        System.out.println("Account Sid : "+tp.getAccount_sid());

    }

}

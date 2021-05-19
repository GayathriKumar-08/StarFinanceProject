package com.srm.finance.Controller;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties("twilio")
public class TwilioProperties {
    private String account_sid;
    private String auth_token;
    private String service_id;
    public String getAccount_sid() {
        return account_sid;
    }
    public void setAccount_sid(String account_sid) {
        this.account_sid = account_sid;
    }
    public String getAuth_token() {
        return auth_token;
    }
    public void setAuth_token(String auth_token) {
        this.auth_token = auth_token;
    }
    public  String getService_id() {
        return service_id;
    }
    public void setService_id(String service_id) {
        this.service_id = service_id;
    }
    
}
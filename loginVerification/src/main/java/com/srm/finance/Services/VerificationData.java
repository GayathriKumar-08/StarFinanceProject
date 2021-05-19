package com.srm.finance.Services;

public class VerificationData {
    private final String id;
    private final String[] errors;
    private final boolean valid;

    public VerificationData(String id) {
        this.id = id;
        this.errors = new String[]{};
        this.valid = true;
    }

    public VerificationData(String[] errors) {
        this.errors = errors;
        this.id = "";
        this.valid = false;
    }

    public String getId() {
        return id;
    }

    public boolean isValid() {
        return valid;
    }

    public String[] getErrors() {
        return errors;
    }
}

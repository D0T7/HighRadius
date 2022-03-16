package com.pojo;


public class business {
    private Integer business_code;
    private String business_name;

    public Integer getBusiness_code() {
        return business_code;
    }

    public void setBusiness_code(Integer business_code) {
        this.business_code = business_code;
    }

    public String getBusiness_name() {
        return business_name;
    }

    public void setBusiness_name(String business_name) {
        this.business_name = business_name;
    }

    @Override
    public String toString() {
        return "Business Code =" + business_code + "/nBusiness Name =" + business_name;
    }
}

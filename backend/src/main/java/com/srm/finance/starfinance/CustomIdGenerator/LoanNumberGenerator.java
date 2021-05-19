package com.srm.finance.starfinance.CustomIdGenerator;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.IdentityGenerator;

public class LoanNumberGenerator extends IdentityGenerator {
    private String first_txt="sflc";
    private String second_txt="loan";
    @Override
    public Serializable generate(SharedSessionContractImplementor session, Object arg1) throws HibernateException {
        try{
            Connection con=session.connection();
            Statement stmt=con.createStatement();
            ResultSet rs=stmt.executeQuery("select count(loan_number)  from GoldLoan");
            while(rs.next())
            {
                int id=rs.getInt(1)+1001;
                String new_id = first_txt + second_txt +id;
                return new_id;
            }
        }
        catch(Exception e)
        {
            System.out.println(e);
        }
        return null;
    }   
}

package com.srm.finance.starfinance.CustomIdGenerator;
import java.io.Serializable;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.IdentifierGenerator;
public class CustomerId implements IdentifierGenerator {
    private String prefix_txt="sflc";
    @Override
    public Serializable generate(SharedSessionContractImplementor session, Object arg1) throws HibernateException {
        try{
            Connection con=session.connection();
            Statement stmt=con.createStatement();
            ResultSet rs=stmt.executeQuery("select count(cust_id)  from register");
            while(rs.next())
            {
                int id=rs.getInt(1)+101;
                String new_id = prefix_txt + id;
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

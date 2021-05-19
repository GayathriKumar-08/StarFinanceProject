package com.srm.finance.starfinance;
// import com.srm.finance.starfinance.Repository.CommonLoanRepo;
//import com.srm.finance.starfinance.Repository.GoldLoanRepo;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages="com.srm.finance.*")
@EntityScan("com.srm.finance.*")
@EnableJpaRepositories(basePackages="com.srm.finance.starfinance.Repository")
public class StarfinanceApplication {
	public static void main(String[] args) {
		SpringApplication.run(StarfinanceApplication.class, args);

	}

}

package com.security.OAuth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
	@CrossOrigin("http://localhost:4200/signup")
    @GetMapping("/")
    public String getData()
    {
        return "diyashri nagaraj";
    }
	@CrossOrigin("http://localhost:4200/signup")
    @GetMapping("/notAllowed")
    public String invalid()
    {
        return "not allowed";
    }
}

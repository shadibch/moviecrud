package com.bch.vedio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bch.vedio.module.Payload;
import com.bch.vedio.module.Token;
import com.bch.vedio.security.JWTConvertor;

@RestController
public class AuthController {
	
	@Autowired
	private JWTConvertor jwtConvertor;
@Autowired
private AuthenticationManager authenticationManager;
	@PostMapping("/api/auth")
	public Token  auth(@RequestBody Payload payLoad) {
		
		Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(payLoad.getUsername(), payLoad.getPassword()));
		String token = jwtConvertor.toJWT(authentication);
		Token t = new Token();
		t.setToken(token);
		return t;
		
	}

}

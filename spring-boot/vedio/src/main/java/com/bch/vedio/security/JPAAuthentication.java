package com.bch.vedio.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import com.bch.vedio.exception.MovieAuthenticationException;
@Service
public class JPAAuthentication implements AuthenticationManager {
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		if(authentication instanceof UsernamePasswordAuthenticationToken) {
			UsernamePasswordAuthenticationToken userpassword = (UsernamePasswordAuthenticationToken)authentication;
			UserDetails userDetails = userDetailsService.loadUserByUsername(userpassword.getName());
			String password = (String)userpassword.getCredentials();
			if(userDetails.getPassword().equals( password)) {
				UsernamePasswordAuthenticationToken result = new UsernamePasswordAuthenticationToken(userDetails.getUsername(), userDetails.getPassword(), userDetails.getAuthorities());
				return result;
			}
			throw new MovieAuthenticationException("Authentication failed");
		}
		throw new MovieAuthenticationException("Authentication failed");
	}

}

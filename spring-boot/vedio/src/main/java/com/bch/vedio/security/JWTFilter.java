package com.bch.vedio.security;


import java.io.IOException;

import javax.security.sasl.AuthenticationException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.stereotype.Service;
import org.springframework.web.filter.GenericFilterBean;


@Service
public class JWTFilter extends GenericFilterBean     {
	@Autowired
	private JWTProvider provider;
	

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		String token = provider.retreiveToken((HttpServletRequest)request);
		if(token != null) {
			Authentication auth = provider.createAuthentication(token);
			SecurityContextHolder.getContext().setAuthentication(auth);
					
		}
		chain.doFilter(request, response);
		
		
	}
}

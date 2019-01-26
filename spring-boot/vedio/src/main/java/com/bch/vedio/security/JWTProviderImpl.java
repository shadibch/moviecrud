package com.bch.vedio.security;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
@Service
public class JWTProviderImpl implements JWTProvider {
	@Autowired
	private JWTConvertor jwtConvertor;
	@Override
	public String retreiveToken(HttpServletRequest req) {
		String bearerToken = req.getHeader("Authorization");
		if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
			String result = bearerToken.substring(7);			
			return result;
		}
		return null;
	}
	@Override
	public Authentication createAuthentication(String token) {
		Authentication authentication = jwtConvertor.fromJWT(token);
		
		return authentication;
	
	}
	@Override
	public void updateHeader(HttpServletResponse response, Authentication authentication) {
		String token = jwtConvertor.toJWT(authentication);
		response.addHeader("Authorization", "Bearer " + token);
		
	}
	
	

}

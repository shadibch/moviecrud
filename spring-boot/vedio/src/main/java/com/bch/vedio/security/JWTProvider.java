package com.bch.vedio.security;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;

public interface JWTProvider {
	String retreiveToken(HttpServletRequest request);
	Authentication createAuthentication(String token);
	void updateHeader(HttpServletResponse response,Authentication authentication);

}

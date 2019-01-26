package com.bch.vedio.exception;

import org.springframework.security.core.AuthenticationException;

public class MovieAuthenticationException extends AuthenticationException {

	/**
	 * 
	 */
	private static final long serialVersionUID = -465673115958559250L;
	
	
	
	public MovieAuthenticationException(String cause) {
		super(cause);
	}

}

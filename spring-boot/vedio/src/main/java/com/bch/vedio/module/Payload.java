package com.bch.vedio.module;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class Payload {
	@NotNull
	@NotEmpty
	private String username;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@NotNull
	@NotEmpty
	private String password;
}

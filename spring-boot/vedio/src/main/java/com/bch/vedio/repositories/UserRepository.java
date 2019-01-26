package com.bch.vedio.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;

import com.bch.vedio.entity.User; 

public interface UserRepository extends JpaRepository<User, Long> {
	@Query("select u from User u left join u.roles where u.username =?1")
    Optional<User> findByUsername(String username);
	@RestResource(path = "userExists", rel = "userExists")
    Boolean existsByUsername(@Param("username") String username);
    
}
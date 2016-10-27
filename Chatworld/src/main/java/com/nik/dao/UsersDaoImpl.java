package com.nik.dao;

import java.util.List;

import org.h2.engine.User;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.nik.model.Users;
@Transactional
@Repository
public class UsersDaoImpl implements UsersDao{
@Autowired
SessionFactory sessionFactory;
	public void registerUser(Users user) {
		
		sessionFactory.getCurrentSession().save(user);
	}
	public List<User> viewUsers() {
		sessionFactory.getCurrentSession().createCriteria(Users.class).list();
		return null;
	}

}

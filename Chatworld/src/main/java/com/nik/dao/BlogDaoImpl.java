package com.nik.dao;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.nik.model.Blog;
@Transactional
@Repository
public class BlogDaoImpl implements BlogDao{
@Autowired
SessionFactory sessionFactory;
	public void addBlog(Blog blog) {
		
		sessionFactory.getCurrentSession().save(blog);
	}

}

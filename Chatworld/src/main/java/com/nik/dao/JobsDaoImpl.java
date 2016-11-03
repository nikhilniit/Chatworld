package com.nik.dao;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.nik.model.Jobs;
@Transactional
@Repository
public class JobsDaoImpl implements JobsDao{
@Autowired
SessionFactory sessionFactory;
	public void addJobs(Jobs jobs) {
		
		sessionFactory.getCurrentSession().save(jobs);
	}

}

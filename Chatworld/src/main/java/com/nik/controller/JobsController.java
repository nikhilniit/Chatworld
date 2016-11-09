package com.nik.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.nik.dao.JobsDao;
import com.nik.model.Jobs;


@RestController
public class JobsController {
@Autowired
JobsDao jobsDao;
@RequestMapping(value="/addJobs",headers="accept=Application/json",method=RequestMethod.POST)
public void addJobs(@RequestBody Jobs jobs)
{
	jobsDao.addJobs(jobs);
}
}

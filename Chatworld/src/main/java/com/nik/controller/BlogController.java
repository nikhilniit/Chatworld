package com.nik.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.nik.dao.BlogDao;
import com.nik.model.Blog;

@RestController
public class BlogController {
@Autowired
BlogDao blogDao;
@RequestMapping(value="/addBlog",headers="accept=Application/json",method=RequestMethod.POST)
public void addBlog(@RequestBody Blog blog)
{
	blogDao.addBlog(blog);
}
}

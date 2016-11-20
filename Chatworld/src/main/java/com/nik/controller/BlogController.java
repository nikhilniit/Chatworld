package com.nik.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.nik.dao.BlogDao;
import com.nik.model.Blog;
import com.nik.model.Users;

@RestController
public class BlogController {
@Autowired
BlogDao blogDao;
@RequestMapping(value="/addBlog",headers="accept=Application/json",method=RequestMethod.POST)
public void addBlog(@RequestBody Blog blog)
{
	blogDao.addBlog(blog);
}
@RequestMapping(value="/viewBlogs",headers="accept=Application/json",method=RequestMethod.GET)
public List<Blog> viewBlogs()
{
	return blogDao.viewBlogs();
	
}

@RequestMapping(value="/deleteBlog/{id}",headers="Accept=application/json",method=RequestMethod.DELETE)
public void deleteJob(@PathVariable int id)
{
	blogDao.deleteBlog(id);
}
@RequestMapping(value="/updateBlog",headers="accept=Application/json",method=RequestMethod.PUT)
public void updateBlog(@RequestBody Blog blog)
{
	blogDao.updateBlog(blog);
}
}

package com.nik.dao;

import java.util.List;

import com.nik.model.Blog;

public interface BlogDao {
void addBlog(Blog blog);

List<Blog> viewBlogs();

void deleteBlog(int id);
void updateBlog(Blog blog);


}

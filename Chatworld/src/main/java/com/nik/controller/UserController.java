package com.nik.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.nik.dao.UsersDao;
import com.nik.model.Users;

@RestController
public class UserController {
@Autowired
UsersDao usersDao;
@RequestMapping(value="/registerUser",headers="accept=Application/json",method=RequestMethod.POST)
	public void saveUser(@RequestBody Users user)
	{
		usersDao.registerUser(user);
	}
@RequestMapping(value = "/getUsers", method = RequestMethod.GET, headers = "Accept=application/json")  
public List<Users> getUsers()
{
	 List<Users> users=usersDao.listUsers();
	return users;
}
@RequestMapping(value="/authenticate", method=RequestMethod.POST,headers="Accept=application/json")
public int authenticateUser(@RequestBody Users users)
{
	System.out.println("in authenticate");
	 System.out.println("name:"+users.getName());
	 System.out.println("password:"+users.getPassword());
int result=0;
	 result=usersDao.validateUser(users.getName(),users.getPassword());
	 System.out.println("result is:"+result);
	 return result;
}

}

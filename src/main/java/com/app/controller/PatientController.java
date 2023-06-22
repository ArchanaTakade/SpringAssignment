package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Message;
import com.app.model.PatientModel;
import com.app.service.PatientService;

@RestController
@CrossOrigin(origins = "http://127.0.0.1:5500/SpringAssign/AllPatientGet.html")
public class PatientController {
	
	@Autowired
	PatientService ps;
	
	 @GetMapping("/patient")
	   public PatientModel getPatient(@RequestParam("Age") long age) {
		   
		   return ps.getpatient(age);
	   }
	   
	 
	 
	    
	    @PostMapping("/post")
	    public PatientModel addpatient(@RequestBody PatientModel mobileno) {
	    	
	    	return ps.Patient(mobileno);
	    }
	    
	    
	    
	   @GetMapping("/getall")
	    public List<PatientModel> getall(){
		   
	    	List<PatientModel>age=ps.getall();
	    	
	    	return age;
	    }
	   
	   
	   @PutMapping("/update-name")
	   public PatientModel update(@RequestParam("age") long age, 
			   @RequestParam("name") String name,
			   @RequestParam("last") String lname,
			   @RequestParam("gender") String gender) {
		   
		   return ps.update(age , name, lname, gender);
	   }
	   
	   @DeleteMapping("/Patient")
	   public Message delete(@RequestParam("age") long age) {
		   
		   return ps. Patient(age);
	   }
	
	
	

	}



package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.model.Message;
import com.app.model.PatientModel;
import com.app.repository.PatientRepository;


@Service
public class PatientService {
	
	@Autowired
	PatientRepository pr;
	
	 public PatientModel getpatient(long age) {
		   
		   Optional<PatientModel>Patient = pr.findById(age);
		   
		   return Patient.isPresent() ? Patient.get() :new PatientModel();
		  
	   }
	 	 public List<PatientModel> getPatientModels(){
		 
	 return(List<PatientModel>)pr.findAll();
	
	 }
	 
	 
	 
			
			public Message delete(long contactno) {
				
				PatientModel Patient = getpatient(contactno);
				
				if(Patient.getId()==null) {
		return  new Message ("Patient is not available");
				
				
			}
			pr.deleteById(contactno);
			return new Message("Patient name is deleted successfully");
			}


			public Message Patient(long age) {
				
				return null;
			}


			public List<PatientModel> getall() {
				
				return (List<PatientModel>) pr.findAll();
			}

			public PatientModel Patient(PatientModel mobileno) {
				
				return pr.save(mobileno);
			}
			public PatientModel update(long age, String name, String lname, String gender) {
				PatientModel pd=getpatient(age);
				if(pd.getId()==null)
				{
					return pd;				}
			
			else {
				pd.setName(name);
				pd.setLastname(lname);
				pd.setGender(gender);
				
				pr.save(pd);
				return pd;
				
			}
			}
		}


	 
	 
	 

	 
package com.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import net.bytebuddy.dynamic.loading.ClassReloadingStrategy.Strategy;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PatientModel {
	
	@Id
	@GeneratedValue (strategy = GenerationType.AUTO)
	private Long id;
	private String name;
	private String middlename;
	private String lastname;
	private int age;
	private String contactNumber;
	private String gender;
	private String bloodTestResult;
	private String urineTestResult;
	
}
//firstName: string
//middleName: string
//lastName: string
//age: number
//contactNumber: string
//gender: string
//bloodTestResults: string
//urineTestResults: string




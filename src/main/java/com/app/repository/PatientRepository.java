package com.app.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.app.model.PatientModel;

@Repository
public interface PatientRepository extends CrudRepository<PatientModel, Long> {

}

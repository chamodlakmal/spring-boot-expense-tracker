package com.chamiviews.expensetracker.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chamiviews.expensetracker.model.Expense;
import com.chamiviews.expensetracker.repository.ExpenseRepository;



@Service
public class ExpenseServiceImpl implements ExpenseService {
	
	@Autowired
	ExpenseRepository expenseRepository;

	@Override
	public List<Expense> findAll() {
		// TODO Auto-generated method stub
		return expenseRepository.findAll();
	}

	@Override
	public Expense save(Expense expense) {
		expenseRepository.save(expense); 
		return expense;
	}

	@Override
	public Expense findById(Long id) {
		if( expenseRepository.findById(id).isPresent()) {
			return expenseRepository.findById(id).get();
		}else {
			return null;
		}
		
	}

	@Override
	public void deleteById(Long id) {
		if( expenseRepository.findById(id).isPresent()) {
			Expense e=findById(id);
			expenseRepository.delete(e);
		}
	}
	
	

}

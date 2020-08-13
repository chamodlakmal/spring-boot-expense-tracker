package com.chamiviews.expensetracker.service;

import java.util.List;

import com.chamiviews.expensetracker.model.Expense;

public interface ExpenseService {
	
	List<Expense> findAll();
	
	Expense save(Expense expense);

}

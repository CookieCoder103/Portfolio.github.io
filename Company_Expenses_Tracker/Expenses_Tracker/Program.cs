using System;
using System.Collections.Generic;

namespace ExpenseTracker
{
    class Expense
    {

        // Objects to be used later.
        public string Product { get; set; }
        public double Amount { get; set; }
        public string Category { get; set; }


        public Expense(string product, string category, double amount)
        {
            Product = product;
            Category = category;
            Amount = amount;

        }

        public override string ToString()
        {
            return $"Product: {Product},  Category: {Category}, Amount: £{Amount}";
        }
    }

    class Program
    {
        static List<Expense> expenses = new List<Expense>();


        static void Main(string[] args)
        {
            bool continueAddingExpenses = true;
            int companyBalance = 50000;
            var categoryOptions = new List<string>{
                "Electronics",
                "Food",
                "Office Equipment",
                "Employees",
                "Misc"
            };

            while (continueAddingExpenses)
            {
                Console.WriteLine("Enter Product:");
                String? product = Console.ReadLine();

                Console.WriteLine("Available Categories:");
                foreach (var option in categoryOptions)
                {
                    Console.WriteLine("- " + option);
                }

                String? category = null;

                Console.WriteLine("Which Category: ");
                while (true)
                {
                    string? userInput = Console.ReadLine();
                    if (userInput != null)
                    {
                        userInput = userInput.ToLower(); 
                        if (categoryOptions.Any(opt => opt.ToLower() == userInput))
                        {
                            category = categoryOptions.First(opt => opt.ToLower() == userInput);
                            break;
                        }
                        else
                        {
                            Console.WriteLine("Invalid category. Please select from the available options.");
                        }
                    }
                    else
                    {
                        Console.WriteLine("Invalid input. Please enter a valid category.");
                    }
                }
                
                double amount;
                Console.WriteLine("Enter expense amount:");
                while (!double.TryParse(Console.ReadLine(), out amount))
                {
                    Console.WriteLine("Invalid input. Please enter a valid amount:");
                }

                expenses.Add(new Expense(product, category, amount));

                Console.WriteLine("Expense added successfully.");

                Console.WriteLine("Do you want to add another expense? (yes/no)");
                string? choice = Console.ReadLine();
                if (choice?.ToLower() != "yes")
                {
                    continueAddingExpenses = false;
                }
            }

            Console.WriteLine("\nAll Expenses:");
            foreach (var expense in expenses)
            {
                Console.WriteLine(expense);
            }

            Console.WriteLine($"\nCompany Balance: £{companyBalance}");
            double totalExpenses = CalculateTotalExpenses();
            Console.WriteLine($"\nTotal Expenses: £{totalExpenses}");
            Console.WriteLine($"\nCompany Balance After Expenses: £{companyBalance-totalExpenses}");
        }

        static double CalculateTotalExpenses()
        {
            double total = 0;
            foreach (var expense in expenses)
            {
                total += expense.Amount;
            }
            return total;
        }
    }
}
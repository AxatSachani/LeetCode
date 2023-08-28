# Write your MySQL query statement below
select name as Customers from Customers where id NOT IN (select DISTINCT customerId from Orders )
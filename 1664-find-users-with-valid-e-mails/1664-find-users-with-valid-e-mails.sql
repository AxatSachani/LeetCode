# Write your MySQL query statement below
Select * from Users where mail REGEXP '^[A-Za-z][A-Za-z0-9._-]*@leetcode[.]com$'
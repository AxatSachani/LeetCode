# Write your MySQL query statement below
Select name From salesperson Where sales_id Not In(
Select sales_id From orders Where com_id IN
(Select com_id From company Where name='Red') )
# Write your MySQL query statement below
Select e.name as name, b.bonus AS bonus 
from Employee e left join Bonus b on e.empId = b.empId where b.bonus < 1000 OR Bonus IS NULL ;
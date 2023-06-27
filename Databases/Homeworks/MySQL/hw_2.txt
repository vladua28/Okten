use vladua28;

# 1. Вибрати усіх клієнтів, чиє ім'я має менше ніж 6 символів.
select * from client where length(FirstName) < 6;

# 2. Вибрати львівські відділення банку.
select * from department where DepartmentCity = 'Lviv';

# 3. Вибрати клієнтів з вищою освітою та посортувати по прізвищу.
select * from client where Education = 'high' order by LastName;

# 4. Виконати сортування у зворотньому порядку над таблицею Заявка і вивести 5 останніх елементів.
select * from application order by idApplication desc limit 5;

# 5. Вивести усіх клієнтів, чиє прізвище закінчується на OV чи OVA.
select * from client where LastName like '%ov' or LastName = '%ova';

# 6. Вивести клієнтів банку, які обслуговуються київськими відділеннями.
select idClient, FirstName, LastName, DepartmentCity from client
join department d on d.idDepartment = client.Department_idDepartment
where DepartmentCity = 'Kyiv';

# 7. Знайти унікальні імена клієнтів.
select distinct FirstName from client;

# 8. Вивести дані про клієнтів, які мають кредит більше ніж на 5000 гривень.   
select distinct client.* from client
join application a on client.idClient = a.Client_idClient
where Currency = 'Gryvnia' and Sum > 5000;

# 9. Порахувати кількість клієнтів усіх відділень та лише львівських відділень.
select count(*) from client
join department d1 on client.Department_idDepartment = d1.idDepartment;
select count(*) from client
join department d2 on client.Department_idDepartment = d2.idDepartment where DepartmentCity = 'Lviv';

# 10. Знайти кредити, які мають найбільшу суму для кожного клієнта окремо.
select max(Sum) as maxSum, client.* from client
join application a on client.idClient = a.Client_idClient
group by idClient;

# 11. Визначити кількість заявок на кредит для кожного клієнта.
select count(*) as appCount, idClient, FirstName, LastName from client
join application a on client.idClient = a.Client_idClient
group by idClient;

# 12. Визначити найбільший та найменший кредити.
select max(Sum) as max, min(Sum) as min from application;

# 13. Порахувати кількість кредитів для клієнтів,які мають вищу освіту.
select count(*) as appCount, idClient, FirstName, LastName, Education from client
join application a on client.idClient = a.Client_idClient
where Education = 'high' group by idClient;

# 14. Вивести дані про клієнта, в якого середня сума кредитів найвища.
select avg(Sum) as avg, client.* from client
join application a on client.idClient = a.Client_idClient
group by idClient order by avg desc limit 1;

# 15. Вивести відділення, яке видало в кредити найбільше грошей
select sum(Sum) as sum, idDepartment, DepartmentCity from department
join client c on department.idDepartment = c.Department_idDepartment
join application a on c.idClient = a.Client_idClient
group by idDepartment order by sum desc limit 1;

# 16. Вивести відділення, яке видало найбільший кредит.
select max(Sum) as maxSum, idDepartment, DepartmentCity from department
join client c on department.idDepartment = c.Department_idDepartment
join application a on c.idClient = a.Client_idClient
group by idDepartment order by maxSum desc limit 1;

# 17. Усім клієнтам, які мають вищу освіту, встановити усі їхні кредити у розмірі 6000 грн.
update application join client c on c.idClient = application.Client_idClient
set Sum = 6000 where Education = 'high';

# 18. Усіх клієнтів київських відділень пересилити до Києва.
update client join department d on d.idDepartment = client.Department_idDepartment
set City = 'Kyiv' where idDepartment = '1';

# 19. Видалити усі кредити, які є повернені.

delete application from application where CreditState = 'returned';

# 20. Видалити кредити клієнтів, в яких друга літера прізвища є голосною.

delete application from application
join client c on c.idClient = application.Client_idClient
where LastName like '_a' or
      LastName like '_e' or
      LastName like '_i' or
      LastName like '_o' or
      LastName like '_u' or
      LastName like '_y';

# 21. Знайти львівські відділення, які видали кредитів на загальну суму більше ніж 5000
select sum(Sum) as totalSum, idDepartment, DepartmentCity from department
join client c on department.idDepartment = c.Department_idDepartment
join application a on c.idClient = a.Client_idClient
where DepartmentCity = 'Lviv' group by idDepartment having totalSum > 5000;

# 22. Знайти клієнтів, які повністю погасили кредити на суму більше ніж 5000
select idClient, FirstName, LastName, CreditState, Sum from client
join application a on client.idClient = a.Client_idClient
where Sum > 5000 and CreditState = 'Returned';

# 23. Знайти максимальний неповернений кредит.
select * from application where CreditState = 'Not returned' order by Sum desc limit 1;

# 24. Знайти клієнта, сума кредиту якого найменша
select idClient, FirstName, LastName, Sum from client
join application a on client.idClient = a.Client_idClient
order by Sum limit 1;

# 25. Знайти кредити, сума яких більша за середнє значення усіх кредитів
select * from application where Sum > (select avg(Sum) from application);

# 26. Знайти клієнтів, які є з того самого міста, що і клієнт, який взяв найбільшу кількість кредитів
select idClient, FirstName, LastName, City from client where City = (select client.City from client
join application a on client.idClient = a.Client_idClient
group by idClient order by count(*) desc limit 1);

# 27. Місто клієнта з найбільшою кількістю кредитів
select City from client
join application a on client.idClient = a.Client_idClient
group by idClient order by count(*) desc limit 1;
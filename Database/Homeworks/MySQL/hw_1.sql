use vladua28;
# 1. знайти всі машини старші за 2000 р.
select * from cars where year < 2000;
# 2. знайти всі машини молодші 2015 р.
select * from cars where year > 2015;
# 3. знайти всі машини 2008, 2009, 2010 років
select * from cars where year between 2008 and 2010;
# 4. знайти всі машини де year==price
select * from cars where year = price;
# 5. знайти всі машини bmw молодші за 2014 р.
select * from cars where model = 'bmw' and year > 2014;
# 6. знайти всі машини audi старші 2014 р.
select * from cars where model = 'audi' and year < 2014;
# 7. знайти перші 5 машин
select * from cars limit 5;
# 8. знайти останні 5 машин
select * from cars order by id desc limit 5;
# 9. знайти середнє арифметичне цін машини KIA
select avg(price) as avg_kia_price from cars where model = 'kia';
# 10. знайти середнє арифметичне цін для кожної марки машин окремо
select avg(price) as avg_price, model from cars group by model;
# 11. підрахувати кількість кожної марки
select count(*) as count_cars, model from cars group by model;
# 12. знайти марку машин кількість яких найбільше
select count(*) as count_cars, model from cars group by model order by count_cars desc limit 1;
# 13. знайти марку машини в назві яких друга та передостання буква "a"
select * from cars where model like '_a%a_';
# 14. знайти всі машини назва моделі яких більше за 8 символів
select * from cars where length(model) > 8;
# ***знайти машини ціна котрих більше ніж ціна середнього арифметичного всіх машин
select * from cars where price > (select avg(price)as avg_price from cars);
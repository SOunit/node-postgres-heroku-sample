-- https://www.tutorialspoint.com/postgresql/postgresql_insert_query.htm
INSERT INTO
   COMPANY (ID, NAME, AGE, ADDRESS, SALARY, JOIN_DATE)
VALUES
   (
      1,
      'Paul',
      32,
      'California',
      20000.00,
      '2001-07-13'
   );

INSERT INTO
   COMPANY (ID, NAME, AGE, ADDRESS, JOIN_DATE)
VALUES
   (2, 'Allen', 25, 'Texas', '2007-12-13');

INSERT INTO
   COMPANY (ID, NAME, AGE, ADDRESS, SALARY, JOIN_DATE)
VALUES
   (3, 'Teddy', 23, 'Norway', 20000.00, DEFAULT);

INSERT INTO
   COMPANY (ID, NAME, AGE, ADDRESS, SALARY, JOIN_DATE)
VALUES
   (
      4,
      'Mark',
      25,
      'Rich-Mond ',
      65000.00,
      '2007-12-13'
   ),
   (5, 'David', 27, 'Texas', 85000.00, '2007-12-13');
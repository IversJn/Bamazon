DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("nintendo", "electronics", 200, 100);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("playstation", "electronics", 300, 150);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("xbox", "electronics", 300, 125);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("swifter", "cleaners", 7.50, 300);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("bleach", "cleaner", 6.50, 300);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("lays", "snacks", 2.50, 500);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("cheetos", "snacks", 2.50, 500);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("salsa", "snacks", 2.50, 500);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("fridge", "appliances", 600, 5);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("washer", "appliances", 650, 6);
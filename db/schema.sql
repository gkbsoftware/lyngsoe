drop table if exists part_type;
create table part_type (
  id serial primary key,
  name varchar(255),
  part_number varchar(255),
  has_serial_number boolean,
  quantity integer
);

drop table if exists parts;
create table parts (
  id serial primary key,
  part_type_id integer,
  serial_number varchar(255)
);

drop table if exists transactions;
create table parts (
  id serial primary key,
  time_stamp timestamp,
  type varchar(10),
  author varchar(3),
  project_number varchar(20),
  customer varchar(40),
  description varchar(255)
);

drop table if exists transaction_parts;
create table parts (
  id serial primary key,
  part_type_name varchar(255),
  part_type_part_number varchar(255),
  part_serial_number varchar(255),
  part_type_quantity integer
);

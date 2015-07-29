drop table if exists part_type;
create table part_type (
  id serial primary key,
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

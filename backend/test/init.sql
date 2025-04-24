CREATE DATABASE prac OWNER student;
GRANT ALL PRIVILEGES ON DATABASE prac TO student;
\connect prac
CREATE TABLE film (
  id uuid PRIMARY KEY,
  rating double precision NOT NULL,
  director text NOT NULL,
  tags text[] NOT NULL,
  image text NOT NULL,
  cover text NOT NULL,
  title text NOT NULL,
  about text NOT NULL,
  description text NOT NULL
);
CREATE TABLE schedule (
  id uuid PRIMARY KEY,
  daytime timestamp with time zone NOT NULL,
  hall numeric NOT NULL,
  rows numeric NOT NULL,
  seats numeric NOT NULL,
  price double precision NOT NULL,
  taken text[],
  "filmId" uuid,
  FOREIGN KEY (filmId) REFERENCES film(id)
);
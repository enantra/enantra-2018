create table colleges(
`id` int(255) primary key auto_increment not null,
`name` varchar(500) not null,
`district` int(255) not null,
Foreign Key(district) references district(id)
);

create table district(
`id` int(255) primary key auto_increment not null,
`district` varchar(500) unique not null
);

create table years(
`id` int(255) primary key not null,
`name` varchar(500) not null
);

create table accomodationoptions(
`id` int(255) primary key not null,
`option` varchar(10) not null unique
);

create table users(
`id` int(255) primary key auto_increment not null,
`e_id` varchar(500) unique not null,
`name` varchar(500) not null,
`email` varchar(500) unique not null,
`number` bigint(10) unique not null,
`dob` date not null,
`college` int(255) not null,
`year` int(255) not null,
`accomodation` int(255) not null,
`referralcode` varchar(500) not null unique,
`blockflag` int(1) not null default 1,
Foreign key(college) references colleges(id),
Foreign key(year) references years(id),
Foreign Key(accomodation) references accomodationoptions(id)
);

create table tshirt(
`id` int(255) primary key auto_increment not null,
`size` varchar(500) not null unique
);

create table ebm(
`id` int(255) primary key auto_increment not null,
`e_id` varchar(500) unique not null,
`t_shirt` int(255)  not null,
Foreign Key(e_id) references users(e_id),
Foreign Key(t_shirt) references tshirt(id) 
);

drop table ebm;

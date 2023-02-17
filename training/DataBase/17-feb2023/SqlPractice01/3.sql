/*
Create a database structure for worldwide cricket team.
Database will contain, each player’s name, its country, it’s
expertise and so on. 
*/

CREATE TABLE cricketeres (
	player_id INT AUTO_INCREMENT PRIMARY KEY,
    player_name VARCHAR(64),
    country VARCHAR(16),
    expertise VARCHAR(64),
    matches_played INT,
    runs_scored INT,
    wickets INT,
    batting_average FLOAT,
    bowling_average FLOAT
    
);

INSERT INTO cricketeres(player_id,player_name, country, expertise, matches_played, runs_scored, wickets, batting_average, bowling_average) 
VALUES 
(1, 'Virat Kohli', 'India', 'Batsman', 248, 12169, 4, 59.07, 77.75),
(2, 'Kane Williamson', 'New Zealand', 'Batsman', 89, 7115, 28, 54.31, 37.18),
(3, 'Steve Smith', 'Australia', 'Batsman', 73, 7227, 2, 62.84, 109.84),
(4, 'Joe Root', 'England', 'Batsman', 107, 9030, 37, 49.51, 46.48),
(5, 'Babar Azam', 'Pakistan', 'Batsman', 31, 2045, 0, 45.44, 0),
(6, 'Ross Taylor', 'New Zealand', 'Batsman', 104, 7379, 2, 46.03, 60.4),
(7, 'Shakib Al Hasan', 'Bangladesh', 'All-rounder', 58, 3862, 210, 39.4, 31.49),
(8, 'Ben Stokes', 'England', 'All-rounder', 71, 4449, 147, 37.84, 32.74),
(9, 'Jason Holder', 'West Indies', 'All-rounder', 44, 1744, 122, 33.97, 26.47),
(10, 'Jasprit Bumrah', 'India', 'Bowler', 14, 2, 68, 6.82, 20.33),
(11, 'Pat Cummins', 'Australia', 'Bowler', 34, 2, 143, 9.77, 21.69),
(12, 'Trent Boult', 'New Zealand', 'Bowler', 68, 654, 279, 12.51, 28.38),
(13, 'Kagiso Rabada', 'South Africa', 'Bowler', 45, 6, 197, 12.94, 22.05),
(14, 'Rashid Khan', 'Afghanistan', 'Bowler', 38, 464, 237, 11.97, 22.88),
(15, 'Mushfiqur Rahim', 'Bangladesh', 'Wicketkeeper', 72, 4411, 0, 35.11, 0);

SELECT player_name,country,expertise from cricketeres WHERE runs_scored>2000;

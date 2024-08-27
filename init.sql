CREATE DATABASE todoapp;

\c todoapp 

ALTER USER postgres WITH PASSWORD 'password';

CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    done BOOLEAN NOT NULL DEFAULT FALSE,
    due_date DATE DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO
    todos (
        title,
        done,
        due_date,
        created_at
    )
VALUES (
        'Skriva en dokumentation',
        FALSE,
        '2024-09-01' '2024-09-01'
    ),
    (
        'Förbereda presentation',
        FALSE,
        '2024-09-10' '2024-09-10'
    ),
    ('Handla', TRUE, '2024-09-05'),
    (
        'Gå ut med hunden',
        FALSE,
        '2024-09-15' '2024-09-15'
    );
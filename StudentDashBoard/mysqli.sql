-- Drop existing tables if they exist
DROP TABLE IF EXISTS users;

-- Create a table to store user information
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Index for faster lookups
CREATE INDEX idx_username ON users (username);
CREATE INDEX idx_email ON users (email);

-- Insert sample data (optional, for testing purposes)
-- Replace with actual user data if needed
-- Note: Using a more secure password hash for better security
INSERT INTO users (username, email, password_hash) VALUES
('testuser', 'testuser@example.com', '$2y$10$examplehashexamplehashexamplehashexamplehashexamplehashexamplehashexamplehash');

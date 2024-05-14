# URL Shortener API

## Description

The URL Shortener API is a simple service that generates short IDs for long URLs, allowing users to create shortened versions of URLs for easier sharing and management. It's built using Node.js, Express, and MySQL.

## Features

- Shorten long URLs to a unique short ID.
- Retrieve original URLs using the generated short IDs.
- Store URL mappings in a MySQL database for persistence.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/isazzadul/url-shortner.git
    ```

2. Install dependencies:

    ```bash
    cd url-shortner
    npm install
    ```

3. Set up MySQL database:
   - Create a MySQL database named `url_shortener_db`.
   - Run the provided SQL script `database.sql` to create the necessary table.

    ```dotenv
    PORT=3000
    DB_HOST=localhost
    DB_USER=your_mysql_username
    DB_PASSWORD=your_mysql_password
    DB_DATABASE=url_shortener_db
    ```

5. Start the server:

    ```bash
    npm start
    ```

## API Endpoints

### 1. Shorten URL

- **Endpoint:** `POST /shorten`
- **Description:** Shortens a long URL and returns a unique short ID.
- **Request Body:**
    ```json
    {
      "refURL": "https://www.example.com/very/long/url"
    }
    ```
- **Response:**
    ```json
    {
      "shortID": "abc123"
    }
    ```

### 2. Retrieve Original URL

- **Endpoint:** `GET /:shortID`
- **Description:** Retrieves the original long URL associated with the given short ID.
- **Response:**
    - Redirects to the original long URL if found.
    - Returns a 404 Not Found error if the short ID does not exist.

## Usage

1. Send a `POST` request to `/shorten` with a JSON body containing the long URL.
2. Use the returned short ID to access the original URL via `GET`.

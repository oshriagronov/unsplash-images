<br />
<div align="center">
  <a href="https://github.com/oshriagronov/unsplash-images">
    <img src="logo.png" alt="Logo" width="200" height="200">
  </a>

<h3 align="center">Unsplash Images</h3>
  <p align="center">
    Simple clone of the site Unsplash.
  </p>
</div>

## About

The project is a Unsplash clone where you can search for photos.

### Key features

- Search for Images
- Support for Dark and Light Modes
- Automatically switch to Dark or Light mode based on your operating system's preference.
- Remembers the theme you choose.

## Technologies Used

- js, html & css.
- Vite
- React - React Hooks, React query, Axios.


## Tools Utilized
- Unsplash API


## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Linux, MacOS or Windows
- nodejs
- npm
- Api key from Unsplash: https://unsplash.com/developers

### Installation

---

1. **Clone and enter the unsplash-images repository:**

   ```bash
   git clone https://github.com/oshriagronov/unsplash-images && cd unsplash-images
   ```

2. **Install npm modules:**

   ```bash
   sudo npm i
   ```

3. **create .env file for api key**  
   _(Make sure you get api key from Unsplash – see [Prerequisites](#prerequisites)):_

   ```bash
   touch .env
   ```

4. **Add the api key to .env :**
   ```bash
   VITE_API_KEY = <API_KEY_HERE>`.
   ```

5. **Run the project:**
    ```bash
      npm run dev
    ```

6. **Go to the site:**
   The site runs in the development mode, open [http://localhost:5173](http://localhost:5173/) to view it in your browser


## Acknowledgements

I would like to thank to John Smilga for creating the great course "Complete React, Next.js & TypeScript Projects Course 2024".

> Link to the course [here](https://www.udemy.com/course/react-tutorial-and-projects-course/?couponCode=KEEPLEARNING)

This is a project that aims to use The Movie Database API to create a website that displays information about movies and television shows while also allowing users to create an account and save their favorite movies and shows.

This application will use React.js, Firebase Firestore, and The Movie Database API. 

##Application Structure Outline
- **Pages/Views(7 pages)**:
    
    - **Home Page**: Displays a list of movies or shows.
    - **Movie/Show Detail Page**: Displays more information about the selected movie/show.
    - **Watchlist/Favorites**: A user-specific page showing the movies/shows they’ve added.
    - **Login/Sign Up Page**: For user authentication.
- **Components(8 components)**:
    
    - **MovieCard**: Displays basic info about a movie (image, title, rating).
    - **SearchBar**: Allows the user to search for movies/shows.
    - **FilterBar**: Allows filtering based on categories (genre, year, etc.).
    - **Watchlist**: A component to manage and display user’s saved content.
    - **NavBar**: Displays links to Home, Watchlist, and Authentication.
    - **LoginForm**: Form for logging in users.
    - **SignupForm**: Form for registering users.
    - **MovieDetail**: Displays detailed information about a specific movie/show.


## **Project Timeline**

#### **Week 1: Setup & User Authentication**

- **Initialize the project**: Set up React, install dependencies, set up Firebase.
- **Set up Firebase authentication**: Implement user sign-up and login functionality.
- **Create user authentication components**: Create `LoginForm`, `SignupForm`, and hooks to manage user authentication state.
- **Build basic routing**: Create routes for Home, Login, Signup, and Watchlist pages.

#### **Week 2: API Integration & Movie Display**

- **Set up TMDb API**: Set up API key and fetch movie data.
- **Build MovieCard component**: Display movie information like title, poster, and description.
- **Create Home page**: Fetch movie data and display it using MovieCard.
- **Add search functionality**: Create a search bar to filter movies.

#### **Week 3: User-Specific Features (Watchlists/Favorites)**

- **Create Watchlist and Favorites feature**: Allow users to save movies/shows to their personal watchlist or favorites.
- **Save to Firestore**: Store watchlist and favorites in Firestore under each user’s document.
- **Create Watchlist page**: Show the user’s saved movies/shows.

#### **Week 4: Final Touches & Deployment**

- **UI improvements**: Style the app to make it look polished.
- **Test user flows**: Test sign-up, login, adding/removing from watchlists, etc.
- **Deploy the app**: Deploy your app to Firebase Hosting, Netlify, or Vercel.
- **Polish**: Perform final bug fixes, clean up the code, and prepare the app for your portfolio.

import { Link, useLocation, useParams } from "react-router-dom";
import { gql, useApolloClient, useQuery } from "@apollo/client";
import fallbackImage from "../assets/fallback-image.gif";
import styles from "../App.module.css";
import { ALL_ANIMALS } from "./Animals";
import Navbar from "../components/Navbar.js";

// Query for getting animal by pet_id
const GET_ANIMAL = gql`
  query getAnimal($animalId: String!) {
    animal(id: $animalId) {
      pet_id
      pet_name
      age
      sex
      size
      addr_city
      addr_state_code
      primary_breed
      secondary_breed
      color
      special_needs
      hair_length
      video_url
      pet_details_url
      original_url
    }
  }
`;

export default function Animal() {
  // Extract the pet_id from the URL
  const { id } = useParams();
  const client = useApolloClient();
  // Get the current URL location to get zip, range, and species
  const location = useLocation();

  // Extract query parameters from the URL
  const searchParams = new URLSearchParams(location.search);
  const zip = searchParams.get("zip") || "01063";
  const range = searchParams.range || 900;
  const species = searchParams.get("species") || "cat";
  
  const { loading, error, data } = useQuery(GET_ANIMAL, {
    variables: { animalId: id },
  });

  // Retrieve the cached data from ALL_ANIMALS query to get the animal's image
  const cachedAnimals = client.readQuery({
    query: ALL_ANIMALS,
    variables: {
      zip,
      range,
      species,
    },
  });

  if (loading) {
    return (
      <div>
        <Navbar /> 
        <div className={styles.loadingText}>Loading...</div>
      </div>
    );
  }

  if (error) {
    console.error(error.message);
    return <p>Error! {error.message}</p>;
  }

  if (!data || !data.animal) {
    return <p>Animal not found.</p>;
  }

  const animal = data.animal;
  // Find the image URL from the cached data
  let animalImage = animal.original_url || fallbackImage;
  if (!animal.original_url && cachedAnimals) {
    const cachedAnimal = cachedAnimals.allAnimals.find(
      (cachedAnimal) => cachedAnimal.pet_id === id
    );
    if (cachedAnimal) {
      animalImage = cachedAnimal.large_results_photo_url || fallbackImage;
    }
  }

  return (
    <div className={styles.animalDetailsContainer}>
      <header className={styles.navbar}>
        <div className={styles.logo}>
          <Link to="/">PURRS</Link>
        </div>
        <nav className={styles.navLinks}>
          <Link to="/animals">Adoption</Link>
          <a href="#link2">Rescue</a>
          <a href="#link3">TNR</a>
          <a href="#link4">Donations</a>
        </nav>
      </header>

      <div className={styles.animalDetailsContent}>
        <h1>More about {animal.pet_name || "this pet"}</h1>
        <div className={styles.animalProfile}>
        <img
            src={animalImage}
            alt={animal.pet_name || "Animal"}
            className={styles.animalProfileImage}
          />
          <div className={styles.animalProfileText}>
            <blockquote>
              "{animal.pet_name || "This pet"} is the sweetest {animal.primary_breed || "pet"} ever."
              <cite>
                {" "}
                from {animal.addr_city || "somewhere"},{" "}
                {animal.addr_state_code || "unknown"} shelter volunteer
              </cite>
            </blockquote>
            <p>
              <strong>Age:</strong> {animal.age || "Unavailable"} <br />
              <strong>Sex:</strong> {animal.sex || "Unknown"} <br />
              <strong>Size:</strong> {animal.size || "Unavailable"} <br />
              <strong>Breed:</strong> {animal.primary_breed || "Unknown"}{" "}
              {animal.secondary_breed && ` & ${animal.secondary_breed}`} <br />
              <strong>Color:</strong> {animal.color || "Unknown"} <br />
              <strong>Hair Length:</strong> {animal.hair_length || "Unknown"} <br />
              <strong>Special Needs:</strong> {animal.special_needs ? "Yes" : "No"} <br />
            </p>
            {animal.video_url && (
              <p>
                <a
                  href={animal.video_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch a video of {animal.pet_name || "this pet"}
                </a>
              </p>
            )}
            <a
              href={animal.pet_details_url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactButton}
            >
              Contact Shelter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

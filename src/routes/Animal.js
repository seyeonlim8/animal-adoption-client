import { useLocation, useParams } from "react-router-dom";
import { gql, useApolloClient, useQuery } from "@apollo/client";
import fallbackImage from "../assets/fallback-image.gif";
import styles from "../css/Animal.module.css";
import { ALL_ANIMALS } from "./Animals";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

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

function Animal() {
  const { id } = useParams();
  // Get the Apollo Client instance
  const client = useApolloClient();
  // Get the current location
  const location = useLocation();

  // Get the query parameters from the location
  const searchParams = new URLSearchParams(location.search);
  const zip = searchParams.get("zip") || "01063";
  const range = searchParams.range || 900;
  const species = searchParams.get("species") || "cat";

  const { loading, error, data } = useQuery(GET_ANIMAL, {
    variables: { animalId: id },
  });

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

  // If the animal image is not available, attempt to use the cached image from the previous query.
  // If the cached image is not available as well, use the fallback image.
  const animal = data.animal;
  let animalImage = animal.original_url || fallbackImage;
  if (!animal.original_url && cachedAnimals) {
    const cachedAnimal = cachedAnimals.allAnimals.find(
      (cachedAnimal) => cachedAnimal.pet_id === id
    );
    if (cachedAnimal) {
      animalImage = cachedAnimal.large_results_photo_url || fallbackImage;
    } 
  } else {
    animalImage = fallbackImage;
  }

  return (
    <div className={styles.animalDetailsContainer}>
      <header className={styles.navbar}>
        <Navbar />
      </header>

      <div className={styles.animalDetailsContent}>
        <h1>More about {animal.pet_name || "this pet"}</h1>
        <div className={styles.animalProfile}>
          <img
            src={animalImage}
            alt={animal.pet_name || "Animal"}
            className={styles.animalProfileImage}
          />
          <table className={styles.animalDetailsTable}>
            <tbody>
              <tr>
                <th>Name</th>
                <td>{animal.pet_name || "Unavailable"}</td>
              </tr>
              <tr>
                <th>Age</th>
                <td>{animal.age || "Unavailable"}</td>
              </tr>
              <tr>
                <th>Sex</th>
                <td>{animal.sex || "Unknown"}</td>
              </tr>
              <tr>
                <th>Size</th>
                <td>{animal.size || "Unavailable"}</td>
              </tr>
              <tr>
                <th>City</th>
                <td>{animal.addr_city || "Unknown"}</td>
              </tr>
              <tr>
                <th>State</th>
                <td>{animal.addr_state_code || "Unknown"}</td>
              </tr>
              <tr>
                <th>Primary Breed</th>
                <td>{animal.primary_breed || "Unknown"}</td>
              </tr>
              <tr>
                <th>Secondary Breed</th>
                <td>{animal.secondary_breed || "None"}</td>
              </tr>
              <tr>
                <th>Color</th>
                <td>{animal.color || "Unknown"}</td>
              </tr>
              <tr>
                <th>Hair Length</th>
                <td>{animal.hair_length || "Unknown"}</td>
              </tr>
              <tr>
                <th>Special Needs</th>
                <td>{animal.special_needs ? "Yes" : "No"}</td>
              </tr>
            </tbody>
          </table>
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
      <Footer />
    </div>
  );
}

export default Animal;
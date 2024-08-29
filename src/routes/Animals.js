import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import styles from "../css/Animals.module.css";
import fallbackImage from "../assets/fallback-image.gif";
import { useState } from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

export const ALL_ANIMALS = gql`
  query getAnimals($zip: String!, $range: Int!, $species: String!) {
    allAnimals(zip: $zip, range: $range, species: $species) {
      pet_id
      pet_name
      age
      addr_city
      addr_state_code
      large_results_photo_url
    }
  }
`;

export default function Animals() {
  const [filters, setFilters] = useState({
    zip: "",
    range: "",
    species: "cat",
  });
  const [errors, setErrors] = useState({});

  const { loading, error, data, refetch } = useQuery(ALL_ANIMALS, {
    variables: {
      zip: "01063", // default ZIP code
      range: 900, // default range
      species: "cat", // default species
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const validateInputs = () => {
    let newErrors = {};
    const zipRegex = /^\d{5}$/;

    if (filters.zip && !zipRegex.test(filters.zip)) {
      newErrors.zip = "Please enter a valid 5-digit US ZIP code";
    }

    if (filters.range && (filters.range < 10 || filters.range > 900)) {
      newErrors.range = "Range must be between 10 and 900 miles";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e) => {
    // prevents the browser from performing the default form submission, which would refresh the page
    e.preventDefault();

    if (validateInputs()) {
      refetch({
        zip: filters.zip || "01063", // Use default if empty
        range: filters.range ? parseInt(filters.range, 10) : 900, // Use default if empty
        species: filters.species,
      });
    }
  };

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

  return (
    <div className={styles.animalsContainer}>
      <Navbar />

      <div className={styles.adoptionTitle}>
        Welcome Home Your New Family Member.
        <div className={styles.adoptionDescription}>
          Every Pet Deserves a Home, and Every Home Deserves a Pet🐱
        </div>
      </div>

      <form onSubmit={handleFormSubmit} className={styles.filterForm}>
        <div>
          <label htmlFor="zip" className={styles.label}>ZIP Code</label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={filters.zip}
            onChange={handleInputChange}
            pattern="\d{5}"
            title="Please enter a valid US ZIP code"
          />
          {errors.zip && <p className={styles.errorText}>{errors.zip}</p>}
        </div>
        <div>
          <label htmlFor="range" className={styles.label}>Range</label>
          <input
            type="number"
            id="range"
            name="range"
            placeholder="10-900 miles"
            value={filters.range}
            onChange={handleInputChange}
            min="10"
            max="900"
          />
          {errors.range && <p className={styles.errorText}>{errors.range}</p>}
        </div>
        <div>
          <label htmlFor="species" className={styles.label}>Species</label>
          <select
            id="species"
            name="species"
            value={filters.species}
            onChange={handleInputChange}
          >
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
            <option value="rabbit">Rabbit</option>
            <option value="bird">Bird</option>
            <option value="reptile">Reptile</option>
            <option value="small_animal">Small Animal</option>
            <option value="horse">Horse</option>
            <option value="farm_animal">Farm Animal</option>
          </select>
        </div>
        <button type="submit">Apply Filters</button>
      </form>

      <div className={styles.animalsGrid}>
        {data.allAnimals.length > 0 ? (
          data.allAnimals.map((animal) => (
            <div key={animal.pet_id} className={styles.animalCard}>
              <img
                src={animal.large_results_photo_url}
                alt={animal.pet_name}
                className={styles.animalImage}
                // Use fallback image on error
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = fallbackImage;
                }}
              />
              <div className={styles.animalDetails}>
                <h3>{animal.pet_name !== null ? animal.pet_name : "Unnamed"}</h3>
                <p>{animal.age}</p>
                <p>
                  {animal.addr_city}, {animal.addr_state_code} Shelter
                </p>
                <Link
                  to={`/animals/${animal.pet_id}?zip=${filters.zip}&range=${filters.range}&species=${filters.species}`}
                  className={styles.contactButton}
                >
                  See Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No results found. Please try different filters.</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

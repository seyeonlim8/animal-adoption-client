import React, { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import axios from "axios";

const API_URL = `https://api-staging.adoptapet.com/search/pet_search?key=hg4nsv85lppeoqqixy3tnlt3k8lj6o0c&v=3&output=json&city_or_zip=01063&geo_range=900&species=cat`

const ALL_ANIMALS = gql`
  query getAnimals($zip: String!, $range: Int!, $species: String!) {
    allAnimals(zip: $zip, range: $range, species: $species) {
      sex
      age
      size
      order
      pet_id
      pet_name
      primary_breed
      secondary_breed
      addr_city
      addr_state_code
      details_url
      results_photo_url
      results_photo_width
      results_photo_height
      large_results_photo_url
      large_results_photo_width
      large_results_photo_height
    }
  }
`;

function ApiTimeComparison() {
  const [restApiTime, setRestApiTime] = useState(null);
  const [graphqlApiTime, setGraphqlApiTime] = useState(null);

  // Measure REST API time
  useEffect(() => {
    const fetchRestApiData = async () => {
      const start = performance.now();
      try {
        await axios.get(API_URL);
        const end = performance.now();
        setRestApiTime((end - start).toFixed(2));
      } catch (error) {
        console.error('REST API error:', error);
      }
    };

    fetchRestApiData();
  }, []);

  // Measure GraphQL API time
  const { loading: graphqlLoading, error: graphqlError } = useQuery(ALL_ANIMALS, {
    variables: {
        zip: "90012",
        range: 900,
        species: "cat",
      },
    onCompleted: () => {
      const end = performance.now();
      setGraphqlApiTime((end - graphqlStart).toFixed(2));
    },
  });

  let graphqlStart = null;

  if (!graphqlLoading && graphqlStart === null) {
    graphqlStart = performance.now();
  }

  if (graphqlError) {
    console.error('GraphQL API error:', graphqlError);
  }

  return (
    <div>
      <h2>API Time Comparison</h2>
      <p>
        REST API Time: {restApiTime !== null ? `${restApiTime} ms` : 'Loading...'}
      </p>
      <p>
        GraphQL API Time: {graphqlApiTime !== null ? `${graphqlApiTime} ms` : 'Loading...'}
      </p>
    </div>
  );
}

export default ApiTimeComparison;

import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

// Query for getting animal by pet_id
const GET_ANIMAL = gql`
  query getAnimal($animalId: String!) {
    animal(id: $animalId) {
      pet_id
      pet_name
      original_url
    }
  }
`;

export default function Animal() {
  // Extract the pet_id from the URL
  const { id } = useParams();
  const {
    loading,
    error,
    data,
  } = useQuery(GET_ANIMAL, {
    variables: {
      animalId: id,
    },
  });


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.error(error.message);
    return <p>Error! {error.message}</p>;
  }

  return (
    <div>
      <h2>{data.animal.pet_name}</h2>
        <img src={data.animal.original_url} alt={data.animal.pet_name} />
        <p></p>
      
    </div>
  );
}

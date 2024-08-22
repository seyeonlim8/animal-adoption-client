import { gql } from "@apollo/client";
import { useParams } from "react-router-dom";

// Query for getting animal by pet_id
const GET_ANIMAL = gql`
  query getAnimal($animalId: String!) {
    animal(animalId: $animalId) {
      pet_id
      pet_name
      addr_city
      addr_state_code
      original_url
      pet_details_url
    }
  }
`;

export default function Animal() {
  const { id } = useParams();
  const {
    loading,
    error,
    data,
    client: { cache },
  } = useQuery(GET_ANIMAL, {
    variables: {
      animalId: id,
    },
  });
}

if (loading) return <p>Loading...</p>;

if (error) {
    console.error(error.message);
    return <p>Error! {error.message}</p>;
}

return (
    <div>
        <h2>{data.animal.pet_name}</h2>
        <p>{data.animal.addr_city}, {data.animal.addr_state_code}</p>
    </div>
);
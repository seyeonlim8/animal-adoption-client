const ALL_ANIMALS = gql`
  query getAnimals {
    allAnimals {
      pet_id
      pet_name
      addr_city
      addr_state_code
      large_results_photo_url
    }
  }
`;

export default function Animals() {
    const { loading, error, data } = useQuery(ALL_ANIMALS);
    if (loading) return <p>Loading...</p>;
    if (error) {
        console.error(error.message);
        return <p>Error! {error.message}</p>;
    }
    return (
        <div>
            <h2>Animals</h2>
            <ul>
                {data.allAnimals.map((animal) => (
                    <li key={animal.pet_id}>
                        <Link to={`/animal/${animal.pet_id}`}>
                            <img src={animal.large_results_photo_url} alt={animal.pet_name} />
                            {animal.pet_name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

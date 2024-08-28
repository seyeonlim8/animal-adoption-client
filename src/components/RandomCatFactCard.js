import { gql, useQuery } from "@apollo/client";
import styles from "../css/RandomCatFactCard.module.css";

const GET_RANDOM_CAT_FACT = gql`
  query getRandomCatFact {
    randomCatFact
  }
`;

function RandomCatFactCard() {
  const { loading, error, data } = useQuery(GET_RANDOM_CAT_FACT);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if(!data) {
        return <div>No data</div>;
    }

    return (
        <div className={styles.factCard}>
          <h3 className={styles.factTitle}>🐈‍⬛ Random Cat Fact of the Day 🐈‍⬛</h3>
          <p className={styles.factText}>{data.randomCatFact}</p>
        </div>
      );
}

export default RandomCatFactCard;

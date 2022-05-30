function Detail({ query }) {
  console.log(query);

  return (
    <div>
      <h1>Halaman Detail {query.detail}</h1>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  return {
    props: { query },
  };
}

export default Detail;

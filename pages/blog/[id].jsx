import Layout from "../../components/layout";

export default function primerPost({ data }) {
  return (
    <Layout>
      <h1>
        {data.id} - {data.title}
      </h1>
      <p>{data.body}</p>
    </Layout>
  );
}

//Estas funciones o llamados de Api no se muestran en la compilacion

//funcion para crear la ruta dinamica
export async function getStaticPaths() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    //crea las rutas dinamicas
    // `${id}` forma de hacer un string plano. de esta forma pintamos el id(numero) como string

    const paths = data.map(({ id }) => ({
      params: {
        id: `${id}`,
      },
    }));
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
}

//funcion para acceder a la informacion que se extraera de la ruta dinamica creada
export async function getStaticProps({ params }) {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + params.id
    );
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

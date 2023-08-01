import Layout from "../../components/layout";
import Link from "next/link";

export default function index({ data }) {
  return (
    <Layout>
      <h1>Lista de post</h1>
      {data.map(({ id, title, body }) => (
        <div key={id}>
          <h3>
            <Link href={`/blog/${id}`}>
              {id} - {title}
            </Link>
          </h3>
          <p>{body}</p>
        </div>
      ))}
    </Layout>
  );
}

//para paginas estaticas que trae la informacion desde el inicio
export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
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

// import { useRouter } from 'next/router';
import Title from '../../components/title';
import Layout from '../../components/layout';
export default function post( { post } ){
    // const router = useRouter();
    // console.log(router);
    return(
        <Layout>
            {/* <Head>
                <title>Post #{post.id}</title>
                <meta name="description" content="En este curso de Webtoriales aprendemos sobre Next.Js" />
            </Head> */}
            <Title>
                Post Details: 
            </Title>
            <div className='card'>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
            {/*  El nombre de la propiedad corresponde al nombre del archivo */}
            {/* <p>
                Post ID: {router.query.id}
            </p> */}
            <style jsx>
            {`
                .card {
                margin: 1rem;
                flex-basis: 45%;
                padding: 1.5rem;
                text-align: left;
                color: black;
                text-decoration: none;
                border: 2px solid #eaeaea;
                border-radius: 10px;
                transition: color 0.15s ease, border-color 0.15s ease;
                }
                .card:hover,
                .card:focus,
                .card:active {
                color: #0070f3;
                border-color: #0070f3;
                }
                .card h3 {
                margin: 0 0 1rem 0;
                font-size: 1.5rem;
                }
                .card p {
                margin: 0;
                font-size: 1.25rem;
                line-height: 1.5;
                }
            `}
            </style>
        </Layout>
    )

}
//Crear ruta dinámica de posts
//DIV
    //h2 => Post Details
    //p => Post ID: ${}
export async function getServerSideProps( {params} ){
    // context.params.id
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await response.json();

    return {
        props: {
            post
        }
    }
}
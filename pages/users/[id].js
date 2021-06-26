import Head from 'next/dist/next-server/lib/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Title from '../../components/title';
import Layout from '../../components/layout';
export default function User({user}){
    const router = useRouter();
    console.log(router);
    if(router.isFallback ){
        return <div>CARGANDO...</div>
    }
    // /users/1, /users/2
    // /users/[id]
    return(
        <Layout>
            <Head>
                <title>User #{user.id}</title>
                <meta name="description" content="En este curso de Webtoriales aprendemos sobre Next.Js" />
            </Head>
            <Title>User ID {user.id}</Title>
            <div className='card'>
                <h3>User</h3>
                <Image src={`/images/${user.id}.jpg`} width={400} height={600} objectFit="cover" />
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
            </div>
            <style jsx>
            {`
            .card {
                margin: 1rem;
                flex-basis: 45%;
                padding: 1.5rem;
                text-align: left;
                color: inherit;
                text-decoration: none;
                border: 1px solid #eaeaea;
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
export async function getStaticPaths(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json();
    // const paths = [
    //     {   params: { id: '1' } },
    //     {   params: { id: '2' } },
    //     // {   params: { id: '3' } },
    //     // {   params: { id: '4' } },
    //     // {   params: { id: '5' } },
    //     // {   params: { id: '6' } },
    //     // {   params: { id: '7' } },
    //     // {   params: { id: '8' } },
    //     // {   params: { id: '9' } },
    //     // {   params: { id: '10' } },
    // ];

    const paths = users.map(user =>{
        return{
            params: {id: `${user.id}`}
        }
    })

    return{
        paths,
        fallback: true
    }
}
export async function getStaticProps({params}){
    //context.params.id
    const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;
    const res = await fetch(url);
    const user = await res.json();

    return{
        props: {
            user
        }
    }
}
import Head from "next/dist/next-server/lib/head";
import Title from "../../components/title";
import Layout from "../../components/layout";
import React from "react";
import Link from "next/dist/client/link";
export default function Posts( {posts} ){

	// CLIENT SIDE RENDERING (Renderizado del lado del cliente)

	// const[posts, setPosts] = React.useState([]);
	// React.useEffect(()=> {
	// 	const fetchPosts = async () => {
	// 		const res = await fetch('https://jsonplaceholder.typicode.com/posts'); 
	// 		const newPosts = await res.json();
	// 		// console.log("newPosts", newPosts);
	// 		setPosts(newPosts);
	// 	}; 
	// 	fetchPosts();
	// }, []);

	return(
		<Layout>
			<Head>
				<title>Landing Pages de Posts </title>
				<meta name="description" content="En este curso de Webtoriales aprendemos sobre Next.Js" />
			</Head>
			<Title>Posts Page </Title>
			<div className='grid'>
				{posts.map(post =>{
					return(
						<Link href={`/posts/[id]`} as={`/posts/${post.id}`} key={post.id} >
							<a className='card'> 
								<h3>{post.title}</h3>
								<p>{post.body}</p>
							</a>
						</Link>
					)
				})}
			</div>
			<style jsx>
				{`
				.grid {
					display: flex;
					flex-wrap: wrap;
					max-width: 800px;
					margin-top: 2rem;
				}
				.card {
					margin: 1rem;
					flex-basis: 45%;
					padding: 1.5rem;
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
export async function getServerSideProps(){
	const res = await fetch('https://jsonplaceholder.typicode.com/posts')
	const posts = await res.json();

	return{
		props: {
			posts
		}
	}
}
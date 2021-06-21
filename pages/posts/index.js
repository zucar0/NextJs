import Title from "../../components/title";
import Layout from "../../components/layout";
import React from "react";
import Link from "next/dist/client/link";
export default function Posts(){

	const[posts, setPosts] = React.useState([]);

	React.useEffect(()=> {
		const fetchPosts = async () => {
			const res = await fetch('https://jsonplaceholder.typicode.com/posts'); 
			const newPosts = await res.json();
			// console.log("newPosts", newPosts);
			setPosts(newPosts);
		}; 
		fetchPosts();
	}, []);

	return(
		<Layout>
			<Title>Posts Page </Title>
			<div>
				{posts.map(post =>{
					return(
						<Link href={`/posts/[id]`} as={`/posts/${post.id}`} key={post.id} >
							<a>
								<h3>{post.title}</h3>
								<p>{post.body}</p>
							</a>
						</Link>
					)
				})}
			</div>  
		</Layout>
	)
}
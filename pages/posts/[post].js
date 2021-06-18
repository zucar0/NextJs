import { useRouter } from 'next/router';

export default function post(){

    const router = useRouter();
    console.log(router);

    return(
        <div>
            <h2>
                Post Details: 
            </h2>
            <p>
                Post ID: {router.query.post}
            </p>
        </div>
    )

}
//Crear ruta dinámica de posts
//DIV
    //h2 => Post Details
    //p => Post ID: ${}

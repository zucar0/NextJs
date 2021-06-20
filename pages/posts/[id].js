import { useRouter } from 'next/router';
import Navbar from '../../components/navbar';

export default function post(){

    const router = useRouter();
    console.log(router);

    return(
        <div>
            <Navbar/>
            {/*  */}
            <h2>
                Post Details: 
            </h2>
            {/*  El nombre de la propiedad corresponde al nombre del archivo */}
            <p>
                Post ID: {router.query.id}
            </p>
        </div>
    )

}
//Crear ruta dinámica de posts
//DIV
    //h2 => Post Details
    //p => Post ID: ${}

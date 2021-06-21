import { useRouter } from 'next/router';
import Title from '../../components/title';
import Layout from '../../components/layout';
export default function post(){

    const router = useRouter();
    console.log(router);

    return(
        <Layout>
            <Title>
                Post Details: 
            </Title>
            {/*  El nombre de la propiedad corresponde al nombre del archivo */}
            <p>
                Post ID: {router.query.id}
            </p>
        </Layout>
    )

}
//Crear ruta dinámica de posts
//DIV
    //h2 => Post Details
    //p => Post ID: ${}

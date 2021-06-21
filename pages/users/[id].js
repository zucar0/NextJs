import { useRouter } from 'next/router';
import Title from '../../components/title';
import Layout from '../../components/layout';
export default function user(){

    const router = useRouter();
    console.log(router);

    return(
        <Layout>
            <Title>
                User Details
            </Title>
            <p>
                User ID: {router.query.id}
            </p>
        </Layout>
    )

}

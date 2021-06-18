import { useRouter } from 'next/router';

export default function user(){

    const router = useRouter();
    console.log(router);

    return(
        <div>
            <h2>
                User Details
            </h2>
            <p>
                User ID: {router.query.id}
            </p>
        </div>
    )

}

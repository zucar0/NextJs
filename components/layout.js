import Navbar from "./navbar";
import Head from "next/head";
export default function Layout({ children }){
    return(
        <div>
            <Head>
                <title>Head desde Layout</title>
                <meta name="description" content="En este curso de Webtoriales aprendemos sobre Next.Js" />
            </Head>
            <Navbar/>
            <main> 
                {children} 
            </main>
            <style jsx>
                {`  
                    div{
                        min-height: 100vw;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    main{
                        flex:1;
                        display:flex;
                        flex-direction: column;
                        align-items: center;
                    }
                `}
            </style>
            <style jsx global>
                {`
                    html, body {
                        padding: 0;
                        margin: 0;
                    }
                    *{
                        box-sizing:border-box;
                    }

                `}
            </style>
        </div>
    )
}
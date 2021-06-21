//Sin desestructuración de objetos
// export default function Title(props){
//     return(
//         <h1>{props.children}</h1>
//     )
// }
//Desetructuación de objetos
export default function Title({ children }){
    return(
        <h1>
            { children}
            <style jsx >
                {`
                    h1{
                        margin:0;
                        font-size: 3rem;
                        text-align: center;
                    }
                `}
            </style>
        </h1>
    )
}
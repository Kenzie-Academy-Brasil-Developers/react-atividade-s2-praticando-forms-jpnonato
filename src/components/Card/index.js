import "./card.css"

function Card({data}){
    return(
        <div>
            <ul className="card">
                <li>Username : {data.userName}</li>
                <li>Nome : {data.Name}</li>
                <li>E-mail : {data.Email}</li>
                <li>Senha cadastrada : {data.Password}</li>
                <li>Telefone : {data.Tel}</li>
                <li>Endereço : {data.Adress}</li>
                <li>Idade : {data.Age}</li>
            </ul>
        </div>
    )
}

export default Card
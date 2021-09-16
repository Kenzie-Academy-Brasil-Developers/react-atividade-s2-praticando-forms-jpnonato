import { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import Card from "../Card"
import './style.css'
import * as yup from 'yup'


const Form = () => {

    const[inputValue, setInputValue] = useState("aaa")

    const formSchema = yup.object().shape({
        userName: yup.string().required("Username é obrigatório"),
        Name: yup.string().required("Nome é obrigatório")
        .matches(/^.(?=.{8,}).*$/ , "*Nome deve ter no mínimo 8 caracteres!"),
        Email: yup.string().required("E-mail é obrigatório").email("E-mail inválido"), 
        Password: yup.string().required("Password é obrigatório")
        .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, "Sua senha deve possuir no mínimo 8 caracteres, um caracter especial, uma letra maiúscula e uma minúscula"),
        Validarpassword: yup.string().required("Você deve confirmar sua senha!").oneOf([yup.ref("Password")]),
        Tel: yup.string().required("Telefone é obrigatório").matches(/^.(?=.[0-9])(?=.{10,}).*$/, "numero de telefone inválido"),
        Adress: yup.string().required("Endereço é obrigatório"),
        Age: yup.string().required("Idade é obrigatório")    
    })


    const {register,handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(formSchema)
    })

    const [userInfo, setUserInfo] = useState()

    const handleSub = (data) => setUserInfo(data)

    return(
     <div>
         <form onSubmit={handleSubmit(handleSub)}>
            <h1> Formulário </h1>
            <section className="input_text">
                <input placeholder="Username*" {...register("userName")}></input>
                {errors.userName && errors.userName.message}

                <input placeholder="Nome completo*" {...register("Name")}></input> 
                {errors.Name && errors.Name.message}

                <input placeholder="Endereço de E-mail*" {...register("Email")}></input>
                {errors.Email && errors.Email.message}

                <input onChange = {e => setInputValue(e.target.value)} placeholder="Senha*" {...register("Password")}></input>
                {errors.Password && errors.Password.message}

                <input placeholder="confirmação de Senha*" {...register("Validarpassword")}></input>
                {errors.Validarpassword && errors.Validarpassword.message}

                <input placeholder="Número de telefone*" {...register("Tel")}></input>
                {errors.Tel && errors.Tel.message}

                <input placeholder="Endereço*" {...register("Adress")}></input>
                {errors.Adress && errors.Adress.message}

                <input placeholder="Idade*" {...register("Age")}></input>
                {errors.Age && errors.Age.message}
            </section>
            <button type="submit">submit</button>
         </form>
             {userInfo === undefined ? <> </> :  <Card data={userInfo}></Card> }
     </div>
    )
}

export default Form

/*onSubmit*/
/* setar valor digitado*/
/* vincular state <-> input --> value={state}*/  
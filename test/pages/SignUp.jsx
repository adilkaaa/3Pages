import { useForm } from "react-hook-form"
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { Home } from "./Home"
export const SignUp=()=>{
    const onSubmit =(data)=>{
        console.log(data)
    }
    const schema = yup.object().shape({
        fullname: yup.string().required(),
        email: yup.string().email().required('deldirek gde za pochta?'),
        age: yup.number().positive().integer().required('Where is age???'),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"),null],'Passwords are not same').required()
    }
    
    )
    const {register, handleSubmit,formState:{errors}} = useForm({resolver: yupResolver(schema)});
    return <div>
        <form onSubmit={handleSubmit(onSubmit)} style={{display:"flex",flexDirection: "column"}} action={<Home/>} >
            <input type="text" placeholder="Full Name" {...register('fullname')} />
            <p>{errors.fullname?.message}</p>
            <input type="text" placeholder="Email" {...register('email')}/>
            <p>{errors.email?.message}</p>
            <input type="number" placeholder="Age" {...register('age')}/>
            <p>{errors.age?.message}</p>
            <input type="password" placeholder="Password" {...register('password')}/>
            <p>{errors.password?.message}</p>
            <input type="password" placeholder="Confirm Password" {...register('confirmPassword')}/>
            <p>{errors.confirmPassword?.message}</p>
            <input type="submit" />
        </form>
    </div>
}
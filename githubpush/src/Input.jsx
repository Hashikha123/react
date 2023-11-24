import React from 'react'
import Checkbox from './Checkbox'
import {useForm} from 'react-hook-form'

function Input() {
    const{control,handleSubmit}=useForm({
        defaultValues:{
        apple:true,
        mango:false,
        banana:false,
        }
    })

    const click=(data)=>{
        console.log(data)
    }
  return (
    <div>
      <form onSubmit={handleSubmit(click)}>
        <label>Select Option</label>
        <Checkbox name="apple"  control={control} />Apple
        <Checkbox name="mango"  control={control}/>Mango
        <Checkbox name="banana"  control={control}/>Banana


        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Input

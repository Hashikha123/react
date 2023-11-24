import React from 'react'
import {Controller} from 'react-hook-form'

function Checkbox({name,label,control,
    defaultValue,
...props
}) {
  return (
    <div>
      <label>
        <Controller 
        {...props}
        name={name}
        control={control}
        defaultValue={defaultValue || false}
        render={({field})=>(
            <input type='checkbox' {...field} checked={field.value}/>
        )}  
        />
{label}
      </label>
    </div>
  )
}

export default Checkbox

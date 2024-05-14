import { authFormSchema } from '@/lib/utils'
import React from 'react'
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'


const fromSchema = authFormSchema("sign-up");

//TYPES
interface customInputProps{
  controls:Control<z.infer<typeof fromSchema>>,
  type:FieldPath<z.infer<typeof fromSchema>>,
  label:string,
  placeholder:string,
}
const CustomInput = ({controls,type,placeholder,label}:customInputProps) => {

  return (
    <>
       <FormField
                control={controls}
                name={type}
                render={({ field }) => (
                  <div className="flex flex-col gap-1">
                    <FormLabel>
                      {label}
                    </FormLabel>
                    <FormControl className="mt-2">
                      <Input 
                      placeholder={placeholder}
                      type={type === "password" ? "password" :"text"}
                        className="input-class px-2"
                        {...field}
                        />
                    </FormControl>
                    <FormMessage className="text-red-400 mt-2"/>
                  </div>
                )}
              />
    </>
  )
}

export default CustomInput

import { authFormSchema } from '@/lib/utils'
import React from 'react'
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'

interface customInputProps{
  controls:Control<z.infer<typeof authFormSchema>>,
  type:FieldPath<z.infer<typeof authFormSchema>>,
}
const CustomInput = ({controls,type}:customInputProps) => {

  return (
    <>
       <FormField
                control={controls}
                name={type}
                render={({ field }) => (
                  <div className="flex flex-col gap-1">
                    <FormLabel>
                      {type}
                    </FormLabel>
                    <FormControl className="mt-2">
                      <input placeholder={`Enter your ${type}`}
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

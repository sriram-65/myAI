"use client"

import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/TempleliteListSection'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Loader2Icon } from 'lucide-react'

interface PROPS {
    selectedTemplate?: TEMPLATE
    userFormInput?:any
    loading:boolean
}

function FormSection({ selectedTemplate , userFormInput , loading }: PROPS) {
    const [formdata , setFromData]=useState<any>()
    const handleInputs = (event:any)=>{
      const {name,value} = event.target
      setFromData({...formdata , [name]:value})
    }
    const onsubmit =(e:any)=>{
         e.preventDefault()
         userFormInput(formdata)
    }
  return (
    <>
      <div className='p-5 shadow-sm border rounded-md mt-6'>
        <Image src={selectedTemplate?.icon} alt="Icon" width={70} height={70} />
        <h2 className='font-bold text-2xl mb-2 text-purple-800'>{selectedTemplate?.name}</h2>
        <p className='text-gray-500 text-sm'>{selectedTemplate?.desc}</p>
      

      <form onSubmit={onsubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div className='my-2 flex flex-col gap-2 mb-7'>
            <label className='font-bold'>{item.label}</label>
            {item.field=="input"?<Input name={item.name} required={item?.required} onChange={handleInputs}/>:item.field=="textarea"?<Textarea name={item.name} required={item?.required} onChange={handleInputs}/>:null
            }
          </div>
        ))}

        <Button type='submit'
        disabled={loading}
        >
          {loading&&<Loader2Icon className='animate-spin'/>}
          Generate Content
        </Button>
        
      </form>
      </div>
    </>
  )
}

export default FormSection

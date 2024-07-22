import templete from '@/app/(data)/templete'
import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'

export interface TEMPLATE {
    name: string,
    desc: string,
    icon: string,
    category: string,
    slug: string,
    aiPrompt: string,
    form?: FORM[]
}

export interface FORM {
    label: string,
    field: string,
    name: string,
    required?: boolean
}

function TempleliteListSection({ userSearchInput }: any) {
    const [templetelist, setTempletelist] = useState(templete)

    useEffect(() => {
        if (userSearchInput) {
            const filterData = templete.filter(item => item.name.toLocaleLowerCase().includes(userSearchInput.toLocaleLowerCase()))
            setTempletelist(filterData)
        } else {
            setTempletelist(templete)
            
            
        }
    }, [userSearchInput])

    return (
        <>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10'>
                {
                    templetelist.map((item: TEMPLATE, index: number) => (
                        <TemplateCard key={index} {...item} />
                    ))
                }
            </div>

           <div className='text-center m-9 p-10  bg-slate-100 text-black shadow-xl '>
            
    <h1 className='font-bold text-3xl '>For <span className='font-mono text-yellow-900 shadow-inner'>Image Generation</span></h1>
    <br /> 
    <Button variant={"destructive"}> <a href='https://sriram-65.github.io/imageGen/' >Get Start Now</a> </Button>
    
  
            </div>
        </>
    )
}

export default TempleliteListSection

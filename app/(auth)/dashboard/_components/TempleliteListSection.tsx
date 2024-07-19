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
        </>
    )
}

export default TempleliteListSection

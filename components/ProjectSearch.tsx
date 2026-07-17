'use client'

import {useSearchParams,usePathname,useRouter} from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export function ProjectSearch(){
    const searchParams=useSearchParams();
    const pathname=usePathname();
    const {replace}=useRouter();

    // function handleSearch(term:string){
    //     const params=new URLSearchParams(searchParams);
    //     params.set('page','1') // reset to page 1 on every new search
    //     if(term){
    //         params.set('query',term)
    //     }else{
    //         params.delete('query')
    //     }
    //     replace(`${pathname}?${params.toString()}`)
    // }
        const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');// reset to page 1 on every new search
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
        }, 300);

    return (
        <input
        type="search" 
        placeholder="Search projects..."
        defaultValue={searchParams.get('query')?.toString()}
        onChange={(e)=>handleSearch(e.target.value)} />
    )
}
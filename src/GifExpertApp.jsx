import {useState} from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Cat']); //declaramos que siempre va a ser [] e inicializamos con un primer valor

    const onAddCategory = (newCategory)=> {
        if(categories.includes(newCategory)) return;
            
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            {/*titulo */}
            <h1>Gif, Fetch y API</h1>

            {/*Input */}
            <AddCategory 
                //setCategories={setCategories} 
                onNewCategory={onAddCategory}    
            />

            {/*Listado de Gif */}
            {
                categories.map((category)=> (
                <GifGrid 
                    key={category} 
                    category={category} />
                ))
            }
    
            {/*Gif Item */}

        </>
    )
}
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const GifExpertApp = props => {

    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = (e) => {
    //     // console.log(e);

    //     setCategories( [...categories, 'HunterXHunter'] );
    //     // setCategories( cats => [...categories, 'HunterXHunter'] ); // otra forma de hacerlo

    // }

    return (
        <>
            <h2>GifExpertApp</h2>

            < AddCategory setCategories={ setCategories } />

            <hr />

            <ol>
                {
                    categories.map( category => (
                        < GifGrid 
                            key={ category }
                            category={ category } 
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp

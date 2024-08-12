import React from 'react'
import SliderComponent2 from './SliderComponent2';
import Cards from './Cards';
import List from "../../public/List.json";
export default function Fruit() {
    const data = List.filter((i)=>(i.type === "fruit"));
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                    <h1 className='font-bold text-4xl m-2 md:m-5 first-letter:text-lime-400  '>Fruits..</h1>
                    <p className='md:text-xl font-display md:ml-10 indent-28 '>Fruits are important sources of vitamins and carbohydrates like fiber and sugar. They are low in calories and naturally sweet. Fruits and their juices are good sources of water, too. Different fruits contain different vitamins, so it is important to eat a variety of fruits.</p>
                    <div className='text-center'>
                    <div className='tooltip mt-5 border-2 border-slate-400 text-xl font-semibold rounded-lg px-3' data-tip="Home..">
                        <button className='text-center' ><a href="/">Back</a></button>
                    </div>
                    </div>
                    <div className=''>
                        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                            {
                                data.map((i)=>(
                                    <Cards item={i} key={i.id}/>
                                ))
                            }
                        </div>
                    </div>
                    


            </div>

        </>
    )
}

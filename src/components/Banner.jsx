import img1 from '../assets/download (12).jpeg';

export default function Banner() {
    return (
        <>
            <div className="max-w-screen-2xl text-3xl container mx-auto mt-8 md:px-20 md:mt-32 px-4 flex  grid md:flex text-center font-thin">                
                <div className="w-full order-2 md:order-1 md:w-1/2 capitalize">buy all types of <span className="text-lime-500 text-4xl font-display" >Fruit</span> and <span className="text-lime-500 font-display text-4xl" >vegetables</span> at our online website
                <div className="" ><p className="font-sans text-lg m-5">Fruits and vegetables are rich in essential vitamins, minerals, and antioxidants that are crucial for maintaining good health and preventing diseases.Most fruits and vegetables are naturally low in calories and fat, making them an excellent choice for weight management.</p></div>
                <div className="flex justify-center ">
                <label className="input input-bordered flex items-center gap-2 dark:bg-white">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="dark:text-black w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow p-2 dark:text-black" placeholder="Email" />
</label>
                </div>
                <button className="btn btn-outline m-2 md:mt-6 px-6 btn-link dark:text-white">Enter</button>

                </div>
                <div  className="w-full md:w-1/2 flex justify-center order-1">
                <div><img className="w-80 h-80"  src={img1} alt="" /></div>
                </div>
            </div>
            <hr className='md:hidden'/>            
        </>
    )
}

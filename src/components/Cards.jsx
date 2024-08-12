import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.png';

export default function Cards({item}) {

    return (
        <>
            <div className='dark:text-black '>
            <div className="card w-auto bg-base-100 bg-slate-900 shadow-xl mx-2 mt-16 mb-6 border border-gray-200 md:hover:scale-105 duration-200">
  <figure><img className='w-fit h-20 mt-5' src={item.image} alt={item.name} /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}!
      <div className="badge badge-secondary">{item.type}</div>
    </h2>

        <div className='h-10 overflow-hidden' >

            <p>{item.benifits}</p>
        </div>

    <div className="card-actions justify-between">
      <div className="badge badge-outline h-8 p-2">    <div className="stat-value">Rs.{item.cost}</div></div> 
      <div><button ><img className="h-10 bg-slate-200 rounded-lg hover:scale-125 duration-200" src="https://img.icons8.com/?size=100&id=LhRbsuC35iCh&format=png&color=000000" alt="cart" /></button></div>
    </div>
  </div>
</div>
            </div>
        </>
    )
}

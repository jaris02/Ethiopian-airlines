import React from 'react'

const Navbar = () => {
    const items = [
        {label:"Check-in",href:'/#'},
        {label:"Awards",href:'/#'},
        {label:"Deals",href:'/#'},
        {label:"Service",href:'/#'},
    ]
    const items2 = [
        {label:"Login",href:'/#',image:'/user.png'},
        {label:"Notfications",href:'/#',image:'/notfication.png'},
        {label:"EN",href:'/#',image:'flag.png'},
        
    ]
  return (
    <nav className='border-b-[1px] border-customgrey flex justify-center w-[1440]'>
        <img src="/logo.png" alt="" className='w-[130px] h-[81.25px] mt-[8px] mb-[31.5px]'/>
       
<ul className='flex items-center justify-center w-[347px] gap-10 mt-[49px] ml-[70px] mb-[51px] font-sans font-medium'>
                {items.map(items=>(
                <li className='font-dm-sans font-medium gap-[40px]' key={items.label}>{items.label}</li>
            ))}
            </ul>
            <ul className='flex items-center justify-center w-[347px] gap-[40px] mt-[49px] ml-[295px] mb-[47px] font-medium'>
            {items2.map(items2=>(
                <li className='flex font-sans font-medium h-[23px] w-[70px] mr-[40px]' key={items2.label}><img className='w-[30px] h-[25px] mr-2' src={items2.image} alt="" />{items2.label}</li>
            ))}
            
            </ul>
            
    </nav>
  )
}

export default Navbar
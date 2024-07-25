


import React, { useState } from 'react';
import '../compoent/navbar.css'
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';


const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);


  
  const animate = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="container fullpage">
    <div className='container fullpage'>
      <div className={`navbar ${isVisible ? 'visible' : 'notvisible'}`}>
        <div className='icon'>
          <button type='button' className='buton'>
            <i className='material-symbols-outlined'>nest_clock_farsight_analog</i>
            Dashboard
          </button>
        </div>

        <div className='icon'>
          <button type='button' className='buton1'>
            <i className='material-symbols-outlined'>group</i>
            Customers
          </button>
        </div>

        <div className='icon'>
          <button type='button' className='buton2'>
            <i className='material-symbols-outlined'>storefront</i>
            Vendors
          </button>
        </div>

        <div className='icon'>
          <button type='button' className='buton3'>
            <i className='material-symbols-outlined'>Local_Shipping</i>
            Delivery Users
          </button>
        </div>

        <div className='icon'>
          <button type='button' className='buton4'>
            <i className='material-symbols-outlined'>group</i>
            Orders List
          </button>
        </div>

        <div className='icon'>
          <button type='button' className='buton5'>
            <i className='material-symbols-outlined'>Moving_Ministry</i>
            Product User
          </button>
        </div>

        <div className='icon'>
          <button type='button' className='buton6'>
            <i className='material-symbols-outlined'>Settings</i>
            Settings
          </button>
        </div>

        <div className='icon'>
          <button type='button' className='buton7'>
            <i className='material-symbols-outlined'>Mode_Off_On</i>
            Logout
          </button>
        </div>
        <div className='burger' onClick={animate}>
          <button id='burgerbutton' className='material-symbols-outlined'>
            Menu
          </button>
        </div>
      </div>
      <div className='logbar'>
  <div className=' logo'>
          <i className= "material-symbols-outlined">shopping_cart</i>
          <p>FRESH DELISH</p> 
          <input className="sbar" name="text" placeholder="Search..." type="search"></input>
    <div className='logset'>
          <i1 className="material-symbols-outlined">Sms</i1>
          <i2 className="material-symbols-outlined">Notifications</i2>
          <i3 className="material-symbols-outlined">Settings</i3>
         <img src="https://via.placeholder.com/150" alt="placeholder" className='pic' height="40px" width="40px" />
          <p><b>Rajasker</b></p>
          <i5 className="material-symbols-outlined">Mode_Off_On</i5>  
          
     </div>
     <p className='p1'>Admin</p>
  </div>
  
  </div>

    

      <div>
        <h2>Dashboard</h2>
        <div className='timing'>
          <button className='buttoni'>Today</button>
          <button className='buttoni'>week</button>
          <button className='buttoni'>month</button>
          <button className='buttoni'>custom</button>
        </div>
      </div>

      <div className=' info'>
        <p>Total Vendors</p>
        <i className='material-symbols-outlined'>storefront</i>
        <h3>100</h3>
        <b>8.5%</b>
        <h6>up to yesterday</h6>
        <span className='material-symbols-outlined'>trending_up</span>
      </div>

      <div className='info1'>
        <p>Total delivery partner</p>
        <i className='material-symbols-outlined'>group</i>
        <h3>100</h3>
        <b>8.5%</b>
        <h6>up to yesterday</h6>
        <span className='material-symbols-outlined'>trending_up</span>
      </div>

      <div className='info2'>
        <p>Total Order</p>
        <i className='material-symbols-outlined'>Deployed_Code</i>
        <h3>10293</h3>
        <b>1.3%</b>
        <h6>up to past week</h6>
        <span className='material-symbols-outlined'>trending_up</span>
      </div>

      <div className='info3'>
        <p>Total Sales</p>
        <i className='material-symbols-outlined'>Chart_Data</i>
        <h3>₹309000</h3>
        <b>1.3%</b>
        <h6>up to past week</h6>
        <span className='material-symbols-outlined'>Trending_Down</span>
      </div>

      <div className='info4'>
        <p>Total Pending</p>
        <i className='material-symbols-outlined'>Device_Reset</i>
        <h3>2040</h3>
        <b>1.8%</b>
        <h6>up to past week</h6>
        <span className='material-symbols-outlined'>Trending_up</span>
      </div>

      <div className='order'>
        <p>Orders Details</p>

        <div className='title'>
          <p>Product Name</p>
          <p>Location</p>
          <p>Date-Time</p>
          <p>Piece</p>
          <p>Amount</p>
          <p>Status</p>
        </div>
        <div className='pbox'>
        <div className="p-item">Relish Rohu Curry Cut With Head</div>
         <div className="p-item">NO-110,Sardar patel Rd,Baktavatsalm Nagar,Adayar</div>
        <div className="p-item">20-APr-2024-12.15pm</div>  
         <div className="p-item">2</div>
        <div className="p-item">₹800</div>
         <div className="p-item"> <button class="buttonp1">Delivered</button> </div>  
        </div>
        <div className='pbox1'>
        <div className="p-item1">Relish Jamaican Jerk DrumStick</div>
         <div className="p-item1">NO-110,Sardar patel Rd,Baktavatsalm Nagar,Adayar</div>
        <div className="p-item1">20-APr-2024-12.15pm</div>  
         <div className="p-item1">10</div>
        <div className="p-item1">₹3000</div>
         <div className="p-item1"> <button class="buttonp2">Pending</button> </div>  
         
        </div>
        <div className='pbox2'>
        <div className="p-item2">Grapes Green Sonaka</div>
         <div className="p-item2">NO-110,Sardar patel Rd,Baktavatsalm Nagar,Adayar</div>
        <div className="p-item2">20-APr-2024-12.15pm</div>  
         <div className="p-item2">10</div>
        <div className="p-item2">₹3000</div>
         <div className="p-item2"> <button class="buttonp3">Rejected</button> </div>
        </div>
     


      </div>
      

      <div className='bar'>
       
<BarChart
      series={[
        { data: [60, 80, 25, 64,60,20,60] },
      ]}
      height={300}
      width={360}
      
      xAxis={[{ data: ['Sun', 'Mon', 'Tue', 'Wed','Thus','Fri','Sat'], scaleType: 'band' }] 
       }
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
    <p className='bbar'>Customer Map</p>
    <p className='wbar'><b className='wwbar'>weekly</b> <i className='material-symbols-outlined'>Arrow_Drop_Down</i></p>
    <p className='material-symbols-outlined dot'>More_Vert</p>
   
</div>

<div className='g2'>
<div className='pie'>
<PieChart
      series={[
        {
          data: [
            { value: 81 }, { value: 19 }
            
          ],
        },
      ]}
      width={250}
      height={200}
    />
</div>
<div className='pie1'>
<PieChart
      series={[
        {
          data: [
            { value: 22 },  { value: 78 },
            
          ],
        },
      ]}
      width={250}
      height={200}
    />
</div>
<div className='pie2'>
<PieChart
      series={[
        {
          data: [
            { value: 62 }, { value: 38 }, 
            
          ],
        },
      ]}
      width={250}
      height={200}
    />
</div>
<p className='obar'><b>Order Progress</b></p>
<p className='to'><b>Total Order</b></p>
<p className='cg'><b>Customer Growth</b></p>
<p className='tr'><b>Total Revenue</b></p>
</div> 



{/* <div> 
<Stack direction="row" width="100%" textAlign="center" spacing={2}>
      <Box flexGrow={1}>
        <Typography>Default</Typography>
        <PieChart
          series={[{ data: [{ value: 10 }, { value: 15 }, { value: 20 }] }]}
          {...pieParams}
        />
      </Box>
      <Box flexGrow={1}>
        <Typography>Palette</Typography>
        <PieChart
          colors={palette}
          series={[{ data: [{ value: 10 }, { value: 15 }, { value: 20 }] }]}
          {...pieParams}
        />
      </Box>
      <Box flexGrow={1}>
        <Typography>Item</Typography>
        <PieChart
          series={[
            { data: [{ value: 10, color: 'orange' }, { value: 15 }, { value: 20 }] },
          ]}
          {...pieParams}
        />
      </Box>
    </Stack>
    </div> */}

<div className='line'>
<LineChart
  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }][{ data: [2, 4, 3, 5, 8, 10] }]}
  
  series={[
    {
      data: [2, 5.5, 2, 8.5, 1.5, 5],
      data: [1,4,1,4.5,1.3,6],
    },
  ]}
  width={800}
  height={300}
/>
<p className='tbar'><b>Total Revenue</b></p>

</div>    


</div>
</div>
   

    
  );
};

export default Navbar;

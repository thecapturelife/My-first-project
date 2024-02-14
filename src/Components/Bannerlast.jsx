import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { BiSolidOffer } from 'react-icons/bi';
import { IoReturnDownBackOutline } from 'react-icons/io5';

const Bannerlast = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: 'lightgreen', padding: '1rem' }}>
      <div className="row d-flex justify-content-around align-items-center">
        <div className="col text-center">
          <div style={{ marginBottom: '1rem' }}>
            <TbTruckDelivery style={{ height: '1.5rem', width: '1.5rem', marginRight: '0.5rem' }} />
            <h6><b>24hrs Delivery<br />All Kerala</b></h6>
          </div>
        </div>

        <div className="col text-center">
          <div style={{ marginBottom: '1rem' }}>
            <BiSolidOffer style={{ height: '1.5rem', width: '1.5rem', marginRight: '0.5rem' }} />
            <h6><b>50% off<br />firstOrder</b></h6>
          </div>
        </div>

        <div className="col text-center">
          <div>
            <IoReturnDownBackOutline style={{ height: '2rem', width: '2rem', marginRight: '0.5rem' }} />
            <h6><b>Easy Return Policy</b></h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bannerlast;


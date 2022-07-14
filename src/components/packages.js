import React from 'react';
import homeimg from '../img/package.jpg';

const PackageData = [
  {
    name: '01',
    price: '$xxx.xx',
    duration: '1 HOUR',
    type: 'VIDEO x STILLS, EXTERIOR, INTERIOR',
    img: { homeimg },
  },
  {
    name: '02',
    price: '$xxx.xx',
    duration: '1 HOUR',
    type: 'VIDEO x STILLS, EXTERIOR, INTERIOR',
    img: { homeimg },
  },
  {
    name: '03',
    price: '$xxx.xx',
    duration: '1 HOUR',
    type: 'VIDEO x STILLS, EXTERIOR, INTERIOR',
    img: { homeimg },
  },
  {
    name: '04',
    price: '$xxx.xx',
    duration: '1 HOUR',
    type: 'VIDEO x STILLS, EXTERIOR, INTERIOR',
    img: { homeimg },
  },
];

const renderModal = (item) => {
  return (
    <div className="modal-container">
      <button type="button" className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
        VIEW DETAILS
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              {item.name}
              {item.type}
              {item.duration}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const renderPackages = (item) => {
  return (
    <div className="package-display-item">
      <img src={homeimg} alt="kitchen" />
      <div className="package-content-container">
        <div className="text-block">
          <h1>{item.name}</h1>
          <h3>{item.price} / {item.duration}</h3>
          <p>{item.type}</p>
        </div>
        <h2>{renderModal(item)}</h2>
      </div>
    </div>
  );
};

const Packages = () => {
  return (
    <div className="package-display">
      {PackageData.map((item) => {
        return (
          renderPackages(item)
        );
      })}
    </div>
  );
};

export default Packages;

import React from 'react';

const DeleteParts = () => {
    return (
        <div>
          



<input type="checkbox" id="delete-parts" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div className="modal-action">
      <label for="delete-parts" className="btn">Yay!</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default DeleteParts;
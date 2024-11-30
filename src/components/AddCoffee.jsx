import React from "react";
import Swal from 'sweetalert2'


const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;
    
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {name,quantity,supplier,taste,category,details,photo}

    console.log(newCoffee)

    fetch('http://localhost:5000/addcoffee',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(newCoffee)
    } )
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.insertedId)
      {
        Swal.fire({
          title: 'Error!',
          text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      }
    })

  };

  return (
    <div>
      <form
        onSubmit={handleAddCoffee}
        className=" m-20 bg-slate-100 p-10 gap-4"
      >
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-2xl font-semibold">Add coffee</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor hic
            omnis reprehenderit alias fugiat. Dolor natus fugiat molestiae
            quidem atque!
          </p>
        </div>
        <div className="flex justify-between gap-4 mt-6">
          <div className="w-full">
            <label className="form-control ">
              <div className="label">
                <span className="label-text text-md font-semibold">
                  Coffee name
                </span>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>
          </div>

          <div className="w-full">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-md font-semibold">
                  Available quantity
                </span>
              </div>
              <input
                type="text"
                name="quantity"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>
          </div>
        </div>

        <div className="flex justify-between gap-4 mt-6">
          <div className="w-full">
            <label className="form-control ">
              <div className="label">
                <span className="label-text text-md font-semibold">
                  Supplier
                </span>
              </div>
              <input
                type="text"
                name="supplier"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>
          </div>

          <div className="w-full">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-md font-semibold">Taste</span>
              </div>
              <input
                type="text"
                name="taste"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>
          </div>
        </div>

        <div className="flex justify-between gap-4 mt-6">
          <div className="w-full">
            <label className="form-control ">
              <div className="label">
                <span className="label-text text-md font-semibold">
                  Category
                </span>
              </div>
              <input
                type="text"
                name="category"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>
          </div>

          <div className="w-full">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-md font-semibold">
                  Details
                </span>
              </div>
              <input
                type="text"
                name="details"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>
          </div>
        </div>

        <div className="flex justify-between gap-4 mt-6 mb-6">
          <div className="w-full">
            <label className="form-control ">
              <div className="label">
                <span className="label-text text-md font-semibold">Photo</span>
              </div>
              <input
                type="text"
                name="photo"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="Add coffee"
          className="btn btn-block my-4 bg-slate-500 text-white"
        />
      </form>
    </div>
  );
};

export default AddCoffee;

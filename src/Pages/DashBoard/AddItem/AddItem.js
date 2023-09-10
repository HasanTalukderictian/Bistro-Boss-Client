import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';



const Image_hosting_token = process.env.REACT_APP_API_KEY;
console.log(Image_hosting_token);

const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${Image_hosting_token}`
    const onSubmit = data => {

        const formData =  new FormData();
        formData.append('image',data.image[0]);
        
        fetch(image_hosting_url,{
            method:"POST",
            body:formData
        } )
        .then(res => res.json())
        .then(ImgResponse => {
            console.log(ImgResponse);
        })
        
    };
     console.log(errors);

    return (
        <div className='w-full px-10'>
            <SectionTitle Subheading="What's New" heading="ADD AN ITEM"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name*</span>

                    </label>
                    <input type="text" placeholder="Recipe Name" 
                    {...register("name", {required: true, maxLength: 120})}
                    className="input input-bordered w-full " />

                </div>
                <div className='flex  w-full'>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Category*</span>

                    </label>
                    <select  defaultValue="Pick One" {...register("Category", { required: true })}
                    className="select select-bordered">
                        <option disabled >Pick One</option>
                        <option>Pizza</option>
                        <option>Soup</option>
                        <option>Desserts</option>
                        <option>Salad</option>
                        <option>Drinks</option>
                    </select>

                </div>
                <div className="form-control w-full  ml-4">
                    <label className="label">
                        <span className="label-text font-semibold">Price*</span>

                    </label>
                    <input type='number' {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full" />

                </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details</span>

                    </label>
                    <textarea className="textarea textarea-bordered h-24" {...register("recipe", { required: true })} placeholder="Bio"></textarea>

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Item Image</span>

                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />

                </div>
                <input type='submit' className="btn btn-warning btn-sm mt-4"  value="Add Item"></input>
            </form>
        </div>
    );
};




export default AddItem;
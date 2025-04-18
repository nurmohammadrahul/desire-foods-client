import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data);
        //image upload on bb then get url
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-Type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            //now send the image data with url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            //evar pathabo
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data)
            if (menuRes.data.insertedId) {
                //show success pop up
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log(res.data);
    }
    return (
        <div>
            <SectionTitle heading={"add menu item"} subHeading={"What's New?"} ></SectionTitle>
            <div className="bg-slate-200 p-4 rounded-md">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text text-black">Recipe Name*</span>
                        </label>
                        <input type="text" placeholder="Recipe Name" {...register('name', { required: true })}
                            className="input input-bordered w-full" />

                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text text-black">Category*</span>
                            </label>
                            <select defaultValue={"default"} {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value={"default"}>Select a Category</option>
                                <option value={"salad"}>Salad</option>
                                <option value={"soup"}>Soup</option>
                                <option value={"pizza"}>Pizza</option>
                                <option value={"dessert"}>Dessert</option>
                                <option value={"drinks"}>Drinks</option>
                            </select>

                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text text-black">Price*</span>
                            </label>
                            <input type="number" placeholder="Price" {...register('price', { required: true })}
                                className="input input-bordered w-full " />

                        </div>
                    </div>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text text-black">Recipe Details*</span>
                        </label>
                        <textarea {...register('recipe', { required: true })} className="textarea textarea-bordered h-24 w-full" placeholder="Recipe Details"></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input file-input-bordered w-full" />
                    </div>
                    <button className="btn p-4 my-6 w-full bg-orange-700 text-white">Add Item <FaUtensils className="ml-4"></FaUtensils></button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;
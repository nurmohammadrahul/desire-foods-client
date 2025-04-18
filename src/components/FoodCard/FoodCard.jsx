import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCart from '../../hooks/useCart';


const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();


    const handleAddToCart = () => {
        // console.log(food, user.email);
        if (user && user.email) {
            //Send Cart 
            // console.log(user.email, food);
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                   // console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart!`,
                            showConfirmButton: false,
                            timer: 2000
                        });
                        // refetch cart
                        refetch()
                    }
                })

        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please log In to Add cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    //send user to login
                    navigate('/login', { state: { from: location } });
                }
            });
        }

    }
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={image}
                        alt="food" />
                </figure>
                <p className='bg-orange-500 rounded-2xl text-white absolute right-0 mr-4 mt-4 px-4'>{price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button
                            onClick={handleAddToCart}
                            className="btn btn-outline bg-slate-100 border-0 border-b-4 mt-4 border-orange-500 hover:bg-black hover:text-white">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
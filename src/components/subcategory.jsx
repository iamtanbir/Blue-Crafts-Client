
import { Link } from 'react-router-dom';

const Subcategory = ({subcategory}) => {
    const {image,name,_id} = subcategory
    return (
        <Link to={`/artsAndCrafts/${name}`}>
        <div
  className="relative  hover:opacity-50 overflow-hidden bg-cover bg-no-repeat p-12 text-center flex items-center justify-center"
  style={{background:"linear-gradient(to bottom,  rgba(0,0,0,0.2),  rgb(0,0,0,0.1)), url('"+image+"')",height:"300px",backgroundSize:'cover'}}>
    <h1 className='text-white text-2xl font-semibold'>{name}</h1>
</div>
        </Link>
    );
};

export default Subcategory;
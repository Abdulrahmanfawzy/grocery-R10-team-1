interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  inStock: boolean;
  quantityOrdered: number;
}

interface Props {
  product: Product;
}

function CreatProductCart({ product }: Props) {
  return (
    <div className=" px-4 py-2 w-full h-28 border-b border-gray-400 flex items-center gap-2">
      <div className=" flex ">
        <img className=" w-12 h-12" src={product.image} alt={product.name}/>
        <h2>{product.inStock ? " In Stock" : " Out Of Stock" }</h2>
      </div>
    </div>
  );
}

export default CreatProductCart ;

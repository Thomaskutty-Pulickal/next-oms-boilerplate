// import { GetServerSideProps } from 'next';

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const response = await fetch('https://dummyjson.com/products');
//   const product = await response.json();
//   console.log("🚀 ~ constgetServerSideProps:GetServerSideProps= ~ product:", product)
//   return { props: { product } };
// };

// export const generateMetadata = async ({ params }: { params: { id: string } }) => {
//   const { id } = params;
//   const { data: product } = await axios.get(`https://api.example.com/products/${id}`);
//   return { title: product.name, description: product.description };
// };

const ProductPage = ({ product }: { product: any }) => (
  <div>
    <h1>{product.name}</h1>
    <p>{product.description}</p>
    <p>Price: ${product.price}</p>
  </div>
);

export default ProductPage;

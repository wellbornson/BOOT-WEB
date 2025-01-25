
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { groq } from "next-sanity";
import { Product } from "../../../../products";
import Image from "next/image";




interface ProductPageProps {
  params: Promise<{ slug: string }>,
}
async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq` 
 *[_type == "product" ][5]{
  _id,
  productName,
  _type,
  image,
  price,
 }  
    `,
    { slug }
  );
};



export default async function ProductPage({ params }: ProductPageProps) {
  const {slug} = await params;
  const product = await getProduct(slug)

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.productName}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          )}
        
        </div>

<div className="flex flex-col gap-8">
  <h1 className="text-4xl font-bold">
    {product.productName}
  </h1>
  <p className="text-2xl font-sans">
    {product.price}
  </p>
</div>

</div>

</div>

)
};





// *[_type == "product" && slug.current == $slug][]{
//   _id,
//   productName,
//   _type,
//   image,
//   price,
// }





// *[_type == "product" ][0]{
//   _id,
//   productName,
//   _type,
//   image,
//   price,
// }
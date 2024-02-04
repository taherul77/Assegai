import getAllProduct from "@/lib/Api/getAllProduct";
import Card from "@/lib/components/Product/Card";

export default async function AllProducts() {

  const { data } = await getAllProduct();
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 justify-center lg:mx-20 mx-5 ">
        <Card data={data} />
      </div>
    </div>
  );
}

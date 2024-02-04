
export default async function getMenSingleProduct(id) {
    const staticData = await fetch(`https://repliq-task-server-chi.vercel.app/api/v1/product/single/${id}`, { cache: 'force-cache' })
    return staticData.json();
 }

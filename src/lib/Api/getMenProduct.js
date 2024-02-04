
export default async function getMenProduct() {
    const staticData = await fetch(`https://repliq-task-server-chi.vercel.app/api/v1/product/`, { cache: 'force-cache' })
    return staticData.json();
 }

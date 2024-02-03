

export default async function getAllProduct() {
  const result= await fetch("https://repliq-task-server-chi.vercel.app/api/v1/product/");
  return result.json();
}

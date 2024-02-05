

export default async function getAllCategories() {
    const result= await fetch('https://65c0fb68dc74300bce8d1b99.mockapi.io/api/v1/categories');
    return result.json();
  }
  
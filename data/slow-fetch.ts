export async function slowFetch(delay: number) {
  try {
    console.log("Fetching slow data...");
    await new Promise((resolve) => setTimeout(resolve, delay * 1000));

    const product = await fetch(
      `https://app-router-api.vercel.app/api/products?id=1`,
    ).then((res) => res.json());

    console.log(`Data fetch completed after ${delay} seconds.`);

    return product;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}

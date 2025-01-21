export async function GET(req: Request, res: Response) {
  const products = [
    {id: 1, title: "Product 1", price: 100, description: "Description one"},
    {id: 2, title: "Product 2", price: 200, description: "Description two"},
    {id: 3, title: "Product 3", price: 300, description: "Description three"},
    {id: 4, title: "Product 4", price: 400, description: "Description four"},
  ]

  return Response.json(products)
}
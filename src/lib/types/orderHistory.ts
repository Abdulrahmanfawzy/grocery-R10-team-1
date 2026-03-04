export interface OrderHistory{
    id: string,
    date: string,
    items: number,
    status: string,
    products: products[]
    moreCount: number,
    total: string,
} 

interface products{
    image: string,
    name: string,
    quantity: number
}
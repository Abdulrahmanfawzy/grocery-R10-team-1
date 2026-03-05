import { Button } from '@/components/ui/button'
import { favorites, lists } from '@/lib/constants/smartList/MockData'
import { Plus, ShoppingCart, Trash2 } from 'lucide-react'


const SmartList = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Smart Lists & Favorites</h1>
          <p className="text-muted-foreground text-sm mt-1">Organize your shopping with custom lists</p>
        </div>
        <Button className='cursor-pointer'><Plus className="w-4 h-4 mr-1" /> Create New List</Button>
      </div>

      {/* Lists Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
        {lists.map((list) => (
          <div key={list.name} className={`rounded-lg border border-border p-5 ${list.color}`}>
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                <img src={list.img} alt={list.name} className='w-15 h-15 rounded-lg  '/>
                <div>
                  <h3 className="font-semibold text-card-foreground">{list.name}</h3>
                  <p className="text-xs text-muted-foreground">{list.items} items</p>
                </div>
              </div>
              <button className="text-muted-foreground hover:text-destructive transition-colors cursor-pointer">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-muted-foreground mb-3">{list.updated}</p>
            <div className="flex items-center gap-2">
              <Button size="sm" className="gap-1 cursor-pointer">
                <ShoppingCart className="w-3 h-3" /> Add All to Cart
              </Button>
              <Button className='cursor-pointer' variant="ghost" size="sm">Edit</Button>
            </div>
          </div>
        ))}
      </div>

      {/* Favorite Items */}
      <div className="bg-card rounded-lg border border-border p-6 my-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-card-foreground"> Favorite Items</h2>
          <button className="text-sm text-primary font-medium hover:underline">Manage Favorites</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {favorites.map((item) => (
            <div key={item.name} className="flex items-center justify-between py-2">
              <div className="flex items-center gap-3">
                <img src={item.img} alt={item.name} />
                <div>
                  <p className="text-sm font-medium text-card-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.price}</p>
                </div>
              </div>
              <Button className='cursor-pointer' size="sm">Add</Button>
            </div>
          ))}
        </div>

        <Button variant="outline" className="w-full mt-4 cursor-pointer">Add All Favorites to Cart</Button>
      </div>

      {/* Archived */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h2 className="font-semibold text-card-foreground mb-1">Archived Lists</h2>
        <p className="text-sm text-muted-foreground mb-2">View and restore your archived shopping lists</p>
        <button className="text-sm text-primary font-medium hover:underline cursor-pointer">View Archived Lists (3)</button>
      </div>
    </div>
  )
}

export default SmartList
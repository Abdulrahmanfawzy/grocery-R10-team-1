import { Button } from "@/components/ui/button";
import { ordersHistory } from "@/lib/constants/orderHistory/OrderHistory";
import { ChevronDown, FileText, ListFilter, Search, Star } from "lucide-react";

function OrderHistory() {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-foreground">Order History</h1>
        <p className="text-muted-foreground text-sm mt-1">
          View and manage all your past orders
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 my-5">
        <div className="flex items-center gap-2 border border-border rounded-lg px-3 py-2 bg-card">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            placeholder="Search Orders"
            className="bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>
        <button className="flex items-center gap-2 border border-border rounded-lg px-3 py-2 bg-card text-sm text-card-foreground">
          All Status <ChevronDown className="w-3 h-3" />
        </button>
        <button className="flex items-center gap-2 border border-border rounded-lg px-3 py-2 bg-card text-sm text-card-foreground">
          Last 30 Days <ChevronDown className="w-3 h-3" />
        </button>
      </div>

      {/* Orders */}
      <div className="space-y-4">
        {ordersHistory.map((order) => (
          <div
            key={order.id}
            className="bg-card rounded-lg border border-border p-5"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="border border-border rounded-md px-3 py-1.5">
                <p className="text-sm font-medium text-card-foreground">
                  Order {order.id}
                </p>
                <p className="text-xs text-muted-foreground">
                  {order.date} {order.items} Items
                </p>
              </div>
              <span className="text-xs font-medium text-success border border-success/30 rounded-md px-2 py-1">
                {order.status}
              </span>
            </div>

            <div className="flex items-center gap-4 mb-4">
              {order.products.map((p) => (
                <div
                  key={p.name}
                  className="flex items-center gap-2 bg-muted rounded-lg px-3 py-2"
                >
                  <img src={p.image} alt={p.name} />
                  <div>
                    <p className="text-xs font-medium text-card-foreground">
                      {p.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Qty : {p.quantity}
                    </p>
                  </div>
                </div>
              ))}
              <div className="bg-muted rounded-lg px-3 py-2 text-xs text-muted-foreground">
                +{order.moreCount} More
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-lg font-bold text-primary">{order.total}</p>
              <div className="flex gap-2">
                <Button size="sm">
                  <FileText className="w-3 h-3 mr-1" /> Download Receipt
                </Button>
                <Button size="sm">
                  <Star className="w-3 h-3 mr-1" /> Rate
                </Button>
                <Button size="sm">
                  <ListFilter className="w-3 h-3 mr-1" /> Reorder
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default OrderHistory;

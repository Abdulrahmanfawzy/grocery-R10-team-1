"use client";

interface PageHeaderProps {
  listName: string;
  description: string;
  itemCount: number;
}

export function PageHeader({
  listName,
  description,
  itemCount,
}: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="animate-fade-in">
        <div className="flex items-center gap-2 mb-4 text-sm text-primary font-medium">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <span>Smart List</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-3 text-balance">
          {listName}
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mb-6 text-pretty">
          {description}
        </p>

        <div className="flex items-center gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-sm font-medium text-foreground">
              {itemCount} {itemCount === 1 ? "item" : "items"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const FooterCopyrights = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-center bg-primary text-primary-foreground py-1 px-4">
      <p>
        &copy; {currentYear} GroceryPlus - Smart Grocery, Delivered Fast. All
        Rights Reserved.
      </p>
    </div>
  );
};

export default FooterCopyrights;

const FooterListColumn = ({
  title,
  items,
  className = "",
}: {
  title: string;
  items: string[];
  className?: string;
}) => {
  return (
    <div className={`text-gray-800 ${className}`}>
      <h3 className="text-xl mb-5 text-gray-900">{title}</h3>
      <ul className="text-sm flex-col space-y-4">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterListColumn;

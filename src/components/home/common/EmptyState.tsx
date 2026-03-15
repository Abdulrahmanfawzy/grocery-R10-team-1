type EmptyStateProps = {
  title?: string;
  description?: string;
  actionText?: string;
  onAction?: () => void;
};

const EmptyState = ({
  title = "No Data Found",
  description = "There is currently no data available to display.",
  actionText,
  onAction,
}: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
      {/* Icon */}
      <div
        className="w-16 h-16 flex items-center justify-center rounded-full"
        style={{ backgroundColor: "#01416220" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#014162"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 13h6m2 7H7a2 2 0 01-2-2V6a2 2 0 012-2h5l2 2h3a2 2 0 012 2v10a2 2 0 01-2 2z"
          />
        </svg>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold" style={{ color: "#014162" }}>
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 max-w-sm">{description}</p>

      {/* Optional Action */}
      {actionText && (
        <button
          onClick={onAction}
          className="px-4 py-2 rounded-md text-white transition hover:opacity-90"
          style={{ backgroundColor: "#014162" }}
        >
          {actionText}
        </button>
      )}
    </div>
  );
};

export default EmptyState;

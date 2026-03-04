import { userData } from "@/lib/constants/dashboard/MockData";

function Greeting() {
  return (
    <div
      className="rounded-lg p-5 text-[#F7FCFF] bg-[#014162] w-full
    rounded-lg "
    >
      <h2 className="mb-1">Welcome back, Sara</h2>
      <p className="mb-4">Here what's happening with your grocery shopping</p>
      <div
        className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 
        text-[#014162]"
      >
        {userData.map((item, index) => (
          <div
            key={index}
            className="bg-[#F7FCFF] flex flex-col gap-2
            p-5 rounded-lg"
          >
            <item.icon className="w-7 h-7" />
            <span className="text-sm">{item.label}</span>
            <span className="text-sm">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Greeting;

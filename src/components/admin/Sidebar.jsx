import {CircleUserRound, LayoutDashboard} from "lucide-react";
import {Link} from "react-router"
import { sidebarLink } from "../../utils/link";
import useAuthStore from "../../store/auth-store";

function Sidebar() {
  const user = useAuthStore((state) => state.user)
  return (
    <div className="bg-[#0ABAB5] w-48">
      {/* Profile */}
      <div className="text-[#FFEDF3] flex flex-col py-12 items-center">
        <CircleUserRound size={48}/>
        <p>Welcome{user && user.role}</p>
      </div>
      {/* Navlink */}
      {
        sidebarLink.map((item)=>{
          return(
            <Link
              key={item.label}
              to={item.link} 
              className="text-[#FFEDF3] flex gap-2 px-4 py-5 hover:bg-gray-400"
            >
              <span>{item.icon}</span>
              <p>{item.label}</p>
            </Link>
          );
        })}
    </div>
  )
}

export default Sidebar
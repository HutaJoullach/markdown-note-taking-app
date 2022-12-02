import Sidenav from "./Sidenav";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

export default function Home() {
  return (
    <div className="home">
      <Sidenav />
      <div className="homepageWrapper">
        <LeftSidebar />
        <div className="homepageNoFile bg-slate-900">No file is open</div>
        <RightSidebar />
      </div>
    </div>
  );
}

import LeftSidebar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import Sidenav from "../Sidenav";
import MarkdownEdit from "./MarkdownEdit";

export default async function Markdown() {

  return (
    <div className="home">
      <Sidenav />
      <div className='homepageWrapper'>
        <LeftSidebar />
        {/* @ts-ignore */}
        <MarkdownEdit />
        <RightSidebar />
      </div>
    </div>
  )
}

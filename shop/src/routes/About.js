import { Outlet } from "react-router-dom/dist";

function About(){
    return (
      <div>
        <h4>about페이지임</h4>
        <Outlet></Outlet>
      </div>
    )
}

export default About;
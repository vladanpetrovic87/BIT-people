import React from "react";

export const Header = () => {
    
    // const [isListView,setIsListView] = useState(false);
    // const [isRefresh,setIsRefresh] = useState(false);
    // useEffect(() => {
    //     getUsers().then((users) => {
    //         setIsListView(users) = true;
    //     });
    //   }, []);

return (
    <nav style={{minHeight: "118px"}}>
    <div className="nav-wrapper">
      <a href="#!" className="brand-logo center">
        Bit Persons
      </a>
      <a href="#!" >About</a>
      {/* <a
        href="#!"
        className="waves-effect waves-light btn"onClick={onLayoutToggle}>
        {" "}
        {isListView ? "List View" : "Grid View"}{" "}
      </a>
      <a
        href="#!"
        className="waves-effect waves-light btn"onClick={onBtnRefresh}>
        Refresh
      </a> */}
     </div>
   
  </nav>
)
}
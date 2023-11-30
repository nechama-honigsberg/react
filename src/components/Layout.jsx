const Layout = (props) => {
    return (
      <div>
          <h1 style={{color:"red"}}>My Layout</h1>
          {props.children}
          <p>&copy; 2023 My Website</p>
      </div>
    );
  };
  
  export default Layout;
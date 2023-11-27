import React from "react";





// Breadcrumb component  CHANGES ^^>>>>>
const Breadcrumb = ({ items }) => {
    const breadcrumbStyle = {
        display: "inline",
        listStyle: "none",
        padding: 0,
        fontSize: "20px",
      };
    
      const linkStyle = {
        textDecoration: "underline",
        color: "blue",
        cursor: "pointer",
      };
  

  return (
    <nav aria-label="breadcrumb">
    <ul style={breadcrumbStyle}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index !== 0 && <li style={{ display: "inline", margin: "0 5px" }}> / </li>}
          {index === items.length - 1 ? (
            <li style={{ display: "inline", margin: "0 5px" }}>{item.name}</li>
          ) : (
            <li style={{ display: "inline", margin: "0 5px" }}>
              <a href={item.link} style={linkStyle}>
                {item.name}
              </a>
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  </nav>
  );
};

// Usage example
// const BreadcrumbExample = () => {
//   const breadcrumbItems = [
//     { name: "Home", link: "/" },
//     { name: "Products", link: "/products" },
//     { name: "Electronics", link: "/products/electronics" },
//     { name: "Smartphones" },
//   ];

//   return <Breadcrumb items={breadcrumbItems} />;
// };

export default Breadcrumb;

import React from 'react';

// Define a component that only re-renders when its props change
const MyComponent = React.memo(function MyComponent({ value }) {
  console.log("Rendering MyComponent");
  return <div>{value}</div>;
});

export default MyComponent;


// Each time you click on an item, the sidebar itself doesn’t change much, but the content does.

// import React from 'react';

// const SidebarItem = React.memo(({ item, onClick }) => {
//   console.log("Rendering SidebarItem:", item.name);
//   return <div onClick={() => onClick(item.id)}>{item.name}</div>;
// });

// export default SidebarItem;

const MyComponent = React.memo(
    function MyComponent({ value }) {
      console.log("Rendering MyComponent");
      return <div>{value}</div>;
    },
    (prevProps, nextProps) => {
      // return true if props are equal, false if props are different
      return prevProps.value === nextProps.value;
    }
  );
  
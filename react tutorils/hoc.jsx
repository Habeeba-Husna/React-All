// HOC that adds extra functionality to a component
function withExtraInfo(Component) {
    return function EnhancedComponent(props) {
      const extraInfo = "This is some extra information";
      return <Component {...props} extraInfo={extraInfo} />;
    };
  }
  
  // Original component
  function DisplayComponent(props) {
    return <div>{props.extraInfo}</div>;
  }
  
  // Enhanced component using the HOC
  const EnhancedDisplay = withExtraInfo(DisplayComponent);
  





  function withAuthProtection(Component) {
    return function AuthProtectedComponent(props) {
      const isLoggedIn = /* check user login status */;
  
      if (!isLoggedIn) {
        return <div>Please log in to access this page.</div>;
      }
      return <Component {...props} />;
    };
  }
  
  // Original component
  function Dashboard(props) {
    return <div>Welcome to your dashboard!</div>;
  }
  
  // Enhanced component
  const ProtectedDashboard = withAuthProtection(Dashboard);
  
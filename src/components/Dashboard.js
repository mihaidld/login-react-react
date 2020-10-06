import React from "react";

const Dashboard = (props) => {
  const { username } = props;
  // eslint-disable-next-line
  return <p>Welcome to your dashboard 🎉, {username}</p>;
};

export default Dashboard;

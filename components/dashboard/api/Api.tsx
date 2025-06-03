import React from "react";
import ApiManagement from "./ApiManagement";
import ApiList from "./ApiList";

const Api = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <ApiManagement />
      <ApiList />
    </div>
  );
};

export default Api;

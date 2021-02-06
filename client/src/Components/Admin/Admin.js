import React, { useState } from "react";
import AdminDash from "./AdminDash";
import AdminSidebar from "./AdminSidebar";

const Admin = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="admin">
      <AdminSidebar step={step} setStep={setStep}></AdminSidebar>
      <AdminDash></AdminDash>
    </div>
  );
};

export default Admin;

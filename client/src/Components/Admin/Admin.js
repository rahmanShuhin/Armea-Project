import React, { useState } from "react";
import Adjustment from "./Adjustment";
import AdminDash from "./AdminDash";
import AdminPost from "./AdminPost";
import AdminSidebar from "./AdminSidebar";
import Ticket from "./Ticket";

const Admin = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="admin">
      <AdminSidebar step={step} setStep={setStep}></AdminSidebar>
      {step === 1 && <AdminDash></AdminDash>}
      {step === 2 && <Ticket></Ticket>}
      {step === 4 && <Adjustment></Adjustment>}
      {step === 5 && <AdminPost></AdminPost>}
    </div>
  );
};

export default Admin;

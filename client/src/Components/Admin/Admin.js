import React, { useState } from "react";
import Adjustment from "./Adjustment";
import AdminDash from "./AdminDash";
import AdminPost from "./AdminPost";
import AdminSidebar from "./AdminSidebar";
import Sales_Report from "./Sales_Report";
import AdminStore from "./Store/AdminStore";
import Ticket from "./Ticket";

const Admin = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="admin">
      <AdminSidebar step={step} setStep={setStep}></AdminSidebar>
      {step === 1 && <AdminDash></AdminDash>}
      {step === 2 && <Ticket></Ticket>}
      {step == 3 && <AdminStore></AdminStore>}
      {step === 4 && <Adjustment></Adjustment>}
      {step === 5 && <AdminPost></AdminPost>}
      {step === 19 && <Sales_Report></Sales_Report>}
    </div>
  );
};

export default Admin;

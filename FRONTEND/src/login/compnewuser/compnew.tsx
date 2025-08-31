import React, { useState } from "react";
import "./compnew.css";

const CompanyRegistration: React.FC = () => {
  const [form, setForm] = useState({
    companyName: "",
    cin: "",
    contactNo: "",
    email: "",
    otp: "",
    password: "",
    confirmPassword: "",
    companyUrl: "",
    companyAddress: "",
    pocName: "",
    pocContact: "",
    internshipDetails: "",
    companyDescription: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", form);
  };

  return (
    <div className="form-box">
      <h2>Company Registration</h2>
      <form onSubmit={handleSubmit}>
        {/* Basic Information */}
        <h3 className="section-title">Basic Information</h3>
        <div className="form-grid">
          <div className="form-field">
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label>CIN</label>
            <input
              type="text"
              name="cin"
              value={form.cin}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label>Contact No.</label>
            <input
              type="text"
              name="contactNo"
              value={form.contactNo}
              onChange={handleChange}
            />
          </div>

          <div className="form-field email-field">
            <label>Email Address</label>
            <div className="email-row">
              <input
                type="email"
                name="email"
                placeholder="name@company.com"
                value={form.email}
                onChange={handleChange}
              />
              <button type="button" className="otp-btn">
                Get OTP
              </button>
              <input
                type="text"
                name="otp"
                placeholder="Enter OTP"
                value={form.otp}
                onChange={handleChange}
              />
              <button type="button" className="verify-btn">
                Verify
              </button>
            </div>
          </div>

          <div className="form-field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label>Company URL</label>
            <input
              type="text"
              name="companyUrl"
              value={form.companyUrl}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Address Section */}
        <h3 className="section-title">Address</h3>
        <div className="form-field wide">
          <label>Company Address</label>
          <textarea
            name="companyAddress"
            value={form.companyAddress}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* POC Section */}
        <h3 className="section-title">Point of Contact</h3>
        <div className="form-grid">
          <div className="form-field">
            <label>POC Name</label>
            <input
              type="text"
              name="pocName"
              value={form.pocName}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label>POC Contact No.</label>
            <input
              type="text"
              name="pocContact"
              value={form.pocContact}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Internship Section */}
        <h3 className="section-title">Internship Program Details</h3>
        <div className="form-field wide">
          <textarea
            name="internshipDetails"
            value={form.internshipDetails}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Description */}
        <h3 className="section-title">Company Description</h3>
        <div className="form-field wide">
          <textarea
            name="companyDescription"
            value={form.companyDescription}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="btn-row">
          <button type="submit" className="submit-btn">
            Submit
          </button>
          <button type="reset" className="reset-btn">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompanyRegistration;

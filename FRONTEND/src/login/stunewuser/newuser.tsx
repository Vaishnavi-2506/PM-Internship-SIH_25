import React, { useMemo, useState } from "react";
import "./newuser.css";

type NullableFile = File | null;

type Address = {
  state?: string;
  district?: string;
  city?: string;
  pincode?: string;
  addressLine?: string;
};

type FormData = {
  // Basic
  name: string;
  aadhar: string;
  phone: string;
  email?: string;
  otp?: string;

  username?: string;
  password?: string;

  // Personal
  fatherName?: string;
  motherName?: string;
  fatherOcc?: string;
  motherOcc?: string;
  annualIncome?: string;
  address: Address;

  // Uploads
  aadharCard: NullableFile;
};

const initialForm: FormData = {
  name: "",
  aadhar: "",
  phone: "",
  email: "",
  otp: "",
  username: "",
  password: "",
  fatherName: "",
  motherName: "",
  fatherOcc: "",
  motherOcc: "",
  annualIncome: "",
  address: { state: "", district: "", city: "", pincode: "", addressLine: "" },
  aadharCard: null,
};

const required = (v?: string) => (v && v.trim().length > 0 ? "" : "Required");

const phoneRegex = /^[6-9]\d{9}$/;
const aadharRegex = /^\d{12}$/;
const pincodeRegex = /^\d{6}$/;

const validate = (data: FormData) => {
  const errors: Record<string, string> = {};

  const nameErr = required(data.name);
  if (nameErr) errors.name = nameErr;

  if (!aadharRegex.test(data.aadhar)) errors.aadhar = "Enter 12-digit Aadhar";
  if (!phoneRegex.test(data.phone)) errors.phone = "Enter valid 10-digit phone";

  if (
    data.password &&
    (data.password.length < 6 || data.password.length > 18)
  ) {
    errors.password = "6–18 chars";
  }

  if (data.address.pincode && !pincodeRegex.test(data.address.pincode)) {
    errors.pincode = "6-digit pincode";
  }

  if (data.annualIncome) {
    const income = parseInt(data.annualIncome, 10);
    if (isNaN(income) || income >= 800000) {
      errors.annualIncome = "Annual income must be less than 8,00,000";
    }
  }

  return errors;
};

const fakeOtp = () => String(Math.floor(100000 + Math.random() * 900000));

const FieldNote = ({ text }: { text: string }) => (
  <span className="nu-field-note">{text}</span>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="nu-section-title">{children}</h2>
);

const Row = ({ children }: { children: React.ReactNode }) => (
  <div className="nu-grid">{children}</div>
);

const Col = ({
  children,
  span = 1,
}: {
  children: React.ReactNode;
  span?: 1 | 2 | 3 | 4;
}) => <div className={`nu-col span-${span}`}>{children}</div>;

const Labeled = ({
  id,
  label,
  requiredMark,
  children,
  error,
  touched,
}: {
  id: string;
  label: string;
  requiredMark?: boolean;
  children: React.ReactNode;
  error?: string;
  touched?: boolean;
}) => (
  <label
    htmlFor={id}
    className={`nu-field ${error && touched ? "has-error" : ""}`}
  >
    <span className="nu-label">
      {label} {requiredMark && <span className="nu-required">*</span>}
    </span>
    {children}
    {error && touched && <span className="nu-error">{error}</span>}
  </label>
);

const NewUser: React.FC = () => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [otpSent, setOtpSent] = useState(false);
  const [otpServer, setOtpServer] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);

  const errors = useMemo(() => validate(form), [form]);

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleBlur = (field: string) => {
    setTouched((t) => ({ ...t, [field]: true }));
  };

  const handleGetOtp = () => {
    if (!phoneRegex.test(form.phone)) {
      alert("Enter a valid phone number first.");
      return;
    }
    const code = fakeOtp();
    setOtpServer(code);
    setOtpSent(true);
    alert(`Demo OTP: ${code}`);
  };

  const handleVerifyOtp = () => {
    if (!otpSent) return alert("Send OTP first.");
    if (form.otp?.trim() === otpServer) alert("OTP verified!");
    else alert("Incorrect OTP.");
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    setTouched(
      Object.keys(form).reduce(
        (acc, key) => ({ ...acc, [key]: true }),
        {} as Record<string, boolean>
      )
    );

    if (Object.keys(errs).length) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setSubmitting(true);
    
    const fd = new window.FormData();
    fd.append("name", form.name);
    fd.append("aadhar", form.aadhar);
    fd.append("phone", form.phone);
    fd.append("email", form.email || "");
    fd.append("username", form.username || "");
    fd.append("password", form.password || "");
    fd.append("fatherName", form.fatherName || "");
    fd.append("fatherOcc", form.fatherOcc || "");
    fd.append("motherName", form.motherName || "");
    fd.append("motherOcc", form.motherOcc || "");
    fd.append("annualIncome", form.annualIncome || "");
    fd.append("state", form.address.state || "");
    fd.append("district", form.address.district || "");
    fd.append("city", form.address.city || "");
    fd.append("pincode", form.address.pincode || "");
    fd.append("addressLine", form.address.addressLine || "");
    if (form.aadharCard) fd.append("aadharCard", form.aadharCard);

    try {
      const res = await fetch("http://localhost:5000/register/user", {
        method: "POST",
        body: fd,
      });
      const data = await res.json();
      if (res.ok) {
        alert(data.message || "Registration successful!");
        setForm(initialForm);
        setTouched({});
        } else {
          alert(data.error || "Registration failed.");
        }
    } catch (err) {
      alert("Network error. Please try again.");
    }
    setSubmitting(false);
  };

    
    


    // setTimeout(() => {
      // alert("Form submitted successfully (demo). Check console for payload.");
      // console.log("New User payload:", form);
      // setSubmitting(false);
    // }, 600);
  
  return (
    <div className="nu-wrapper">
      <header className="nu-header">
        <h1>New User Registration</h1>
        <div className="nu-lang">
          Language: <strong>English</strong>
        </div>
      </header>

      <form className="nu-form" onSubmit={onSubmit} noValidate>
        <SectionTitle>Basic Information</SectionTitle>
        <Row>
          <Col span={2}>
            <Labeled
              id="name"
              label="Name"
              requiredMark
              error={errors.name}
              touched={touched.name}
            >
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                onBlur={() => handleBlur("name")}
                placeholder="Enter full name"
                required
              />
            </Labeled>
          </Col>
          <Col>
            <Labeled
              id="aadhar"
              label="Aadhar No."
              requiredMark
              error={errors.aadhar}
              touched={touched.aadhar}
            >
              <input
                id="aadhar"
                inputMode="numeric"
                maxLength={12}
                value={form.aadhar}
                onChange={(e) =>
                  update("aadhar", e.target.value.replace(/\D/g, ""))
                }
                onBlur={() => handleBlur("aadhar")}
                placeholder="12 digits"
                required
              />
            </Labeled>
          </Col>
          <Col>
            <Labeled id="email" label="Email ID">
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                onBlur={() => handleBlur("email")}
                placeholder="name@example.com"
              />
            </Labeled>
          </Col>
          <Col>
            <Labeled
              id="phone"
              label="Phone No."
              requiredMark
              error={errors.phone}
              touched={touched.phone}
            >
              <div className="nu-inline">
                <input
                  id="phone"
                  inputMode="tel"
                  maxLength={10}
                  value={form.phone}
                  onChange={(e) =>
                    update("phone", e.target.value.replace(/\D/g, ""))
                  }
                  onBlur={() => handleBlur("phone")}
                  placeholder="10 digits"
                  required
                />
                <button
                  className="nu-btn ghost"
                  type="button"
                  onClick={handleGetOtp}
                >
                  Get OTP
                </button>
              </div>
            </Labeled>
          </Col>
          <Col>
            <Labeled id="otp" label="Enter OTP">
              <div className="nu-inline">
                <input
                  id="otp"
                  inputMode="numeric"
                  maxLength={6}
                  value={form.otp}
                  onChange={(e) =>
                    update("otp", e.target.value.replace(/\D/g, ""))
                  }
                  onBlur={() => handleBlur("otp")}
                  placeholder="6-digit code"
                />
                <button
                  className="nu-btn"
                  type="button"
                  onClick={handleVerifyOtp}
                >
                  Verify
                </button>
              </div>
              {otpSent && (
                <FieldNote text="You can resend by tapping Get OTP again." />
              )}
            </Labeled>
          </Col>
          <Col>
            <Labeled id="username" label="Username">
              <input
                id="username"
                value={form.username}
                onChange={(e) => update("username", e.target.value)}
                onBlur={() => handleBlur("username")}
                placeholder="Preferred username"
              />
            </Labeled>
          </Col>
          <Col>
            <Labeled
              id="password"
              label="Password"
              error={errors.password}
              touched={touched.password}
            >
              <input
                id="password"
                type="password"
                value={form.password}
                onChange={(e) => update("password", e.target.value)}
                onBlur={() => handleBlur("password")}
                placeholder="6–18 chars"
              />
            </Labeled>
          </Col>
        </Row>

        <SectionTitle>Personal Details</SectionTitle>
        <Row>
          <Col>
            <Labeled id="fatherName" label="Father Name">
              <input
                id="fatherName"
                value={form.fatherName}
                onChange={(e) => update("fatherName", e.target.value)}
              />
            </Labeled>
          </Col>
          <Col>
            <Labeled id="fatherOcc" label="Father Occupation">
              <input
                id="fatherOcc"
                value={form.fatherOcc}
                onChange={(e) => update("fatherOcc", e.target.value)}
              />
            </Labeled>
          </Col>
          <Col>
            <Labeled id="motherName" label="Mother Name">
              <input
                id="motherName"
                value={form.motherName}
                onChange={(e) => update("motherName", e.target.value)}
              />
            </Labeled>
          </Col>
          <Col>
            <Labeled id="motherOcc" label="Mother Occupation">
              <input
                id="motherOcc"
                value={form.motherOcc}
                onChange={(e) => update("motherOcc", e.target.value)}
              />
            </Labeled>
          </Col>
          <Col>
            <Labeled
              id="income"
              label="Annual Income"
              error={errors.annualIncome}
              touched={touched.annualIncome}
            >
              <input
                id="income"
                inputMode="numeric"
                value={form.annualIncome}
                onChange={(e) => update("annualIncome", e.target.value)}
                onBlur={() => handleBlur("annualIncome")}
                placeholder="₹ in numbers"
              />
            </Labeled>
          </Col>
        </Row>

        <SectionTitle>Address</SectionTitle>
        <Row>
          <Col>
            <Labeled id="state" label="State">
              <input
                id="state"
                value={form.address.state}
                onChange={(e) =>
                  update("address", { ...form.address, state: e.target.value })
                }
              />
            </Labeled>
          </Col>
          <Col>
            <Labeled id="district" label="District">
              <input
                id="district"
                value={form.address.district}
                onChange={(e) =>
                  update("address", {
                    ...form.address,
                    district: e.target.value,
                  })
                }
              />
            </Labeled>
          </Col>
          <Col>
            <Labeled id="city" label="City">
              <input
                id="city"
                value={form.address.city}
                onChange={(e) =>
                  update("address", { ...form.address, city: e.target.value })
                }
              />
            </Labeled>
          </Col>
          <Col>
            <Labeled
              id="pincode"
              label="Pincode"
              error={errors.pincode}
              touched={touched.pincode}
            >
              <input
                id="pincode"
                inputMode="numeric"
                maxLength={6}
                value={form.address.pincode}
                onChange={(e) =>
                  update("address", {
                    ...form.address,
                    pincode: e.target.value.replace(/\D/g, ""),
                  })
                }
                onBlur={() => handleBlur("pincode")}
              />
            </Labeled>
          </Col>
          <Col span={4}>
            <Labeled id="addr" label="Address">
              <textarea
                id="addr"
                rows={3}
                value={form.address.addressLine}
                onChange={(e) =>
                  update("address", {
                    ...form.address,
                    addressLine: e.target.value,
                  })
                }
              />
            </Labeled>
          </Col>
        </Row>

        <SectionTitle>Upload Certificate</SectionTitle>
        <Row>
          <Col>
            <Labeled id="aadharUpload" label="Aadhar Card (PDF/JPG/PNG)">
              <input
                id="aadharUpload"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) =>
                  update(
                    "aadharCard",
                    e.target.files ? e.target.files[0] : null
                  )
                }
              />
              {form.aadharCard && (
                <FieldNote text={`Selected: ${form.aadharCard.name}`} />
              )}
            </Labeled>
          </Col>
        </Row>

        <div className="nu-actions">
          <button className="nu-btn" type="submit" disabled={submitting}>
            {submitting ? "Submitting…" : "Submit"}
          </button>
          <button
            className="nu-btn ghost"
            type="button"
            onClick={() => {
              setForm(initialForm);
              setTouched({});
            }}
            disabled={submitting}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
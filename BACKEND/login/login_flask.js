const formData = new FormData();
formData.append("name", values.name);
formData.append("aadhar", values.aadhar);
formData.append("phone", values.phone);
formData.append("email", values.email);
formData.append("username", values.username);
formData.append("password", values.password);

formData.append("fatherName", values.fatherName);
formData.append("fatherOcc", values.fatherOcc);
formData.append("motherName", values.motherName);
formData.append("motherOcc", values.motherOcc);
formData.append("annualIncome", values.annualIncome);

formData.append("state", values.state);
formData.append("district", values.district);
formData.append("city", values.city);
formData.append("pincode", values.pincode);
formData.append("addressLine", values.addressLine);

formData.append("aadharCard", values.aadharCardFile);

fetch("http://127.0.0.1:5000/register/user", {
  method: "POST",
  body: formData
})
.then(res => res.json())
.then(data => alert(data.message));

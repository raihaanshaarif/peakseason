const Form2 = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form[0].value,
      email: form[1].value,
      phone: form[2].value,
      address: form[3].value,
      postcode: form[4].value,
      services: [
        form[5].checked ? "Heating" : null,
        form[6].checked ? "Cooling" : null,
      ].filter(Boolean),
      serviceType: form[7].value,
      date: form[8].value,
      time: form[9].value,
      additionalInfo: form[10].value,
    };

    // Send email via sendmail.php
    try {
      const response = await fetch("https://servicemyhome.net/sendmail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert("Your appointment request has been sent!");
        form.reset();
      } else {
        alert("Failed to send email. Please try again later.");
      }
    } catch (err) {
      alert("Failed to send email. Please try again later.");
      console.log(err);
    }
  };

  return (
    <form action="#" className="cs_contact_form2" onSubmit={handleSubmit}>
      <h2 className="text-center cs_fs_36 cs_semibold">
        Request an Appointment
      </h2>
      {/* Name */}
      <input
        type="text"
        className="cs_form_field cs_mb_10"
        placeholder="Name*"
        required
      />
      {/* Email */}
      <input
        type="email"
        className="cs_form_field cs_mb_10"
        placeholder="Email*"
        required
      />
      {/* Phone */}
      <input
        type="tel"
        className="cs_form_field cs_mb_10"
        placeholder="Phone*"
        required
      />
      {/* Address Line 1 */}
      <input
        type="text"
        className="cs_form_field cs_mb_10"
        placeholder="Address Line 1 (required)*"
        required
      />
      {/* Postcode */}
      <input
        type="text"
        className="cs_form_field cs_mb_10"
        placeholder="Postcode*"
        required
      />
      {/* Heating/Cooling checkboxes */}
      <div className="cs_mb_10">
        <label style={{ marginRight: "16px" }}>
          <input
            type="checkbox"
            name="service"
            value="Heating"
            style={{ marginRight: "6px" }}
          />
          Heating
        </label>
        <label>
          <input
            type="checkbox"
            name="service"
            value="Cooling"
            style={{ marginRight: "6px" }}
          />
          Cooling
        </label>
      </div>
      {/* Service Type */}
      <select className="cs_form_field cs_mb_10" required defaultValue="">
        <option value="" disabled>
          Service Type*
        </option>
        <option value="Servicing">Servicing</option>
        <option value="Repair">Repair</option>
        <option value="Installation">Installation</option>
        <option value="Maintenance">Maintenance</option>
      </select>
      {/* Date and Time */}
      <div className="cs_mb_10 d-flex" style={{ gap: "10px" }}>
        <input
          type="date"
          className="cs_form_field"
          required
          style={{ flex: 1 }}
        />
        <input
          type="time"
          className="cs_form_field"
          required
          style={{ flex: 1 }}
        />
      </div>
      {/* Additional Information */}
      <textarea
        cols="30"
        rows="4"
        className="cs_form_field cs_mb_10"
        placeholder="Additional Information..."
      />
      {/* Submit */}
      <button className="cs_btn cs_style_1 w-100" type="submit">
        <span>Appointment Now</span>
      </button>
    </form>
  );
};

export default Form2;

// const Form3 = () => {
//     return (
//         <form action="#" className="cs_contact_form">
//             <h2 className="text-center cs_fs_36 cs_semibold">Request an Appointment</h2>
//             {/* Name */}
//             <input type="text" className="cs_form_field cs_mb_22" placeholder="Name*" required />
//             {/* Email */}
//             <input type="email" className="cs_form_field cs_mb_22" placeholder="Email*" required />
//             {/* Phone */}
//             <input type="tel" className="cs_form_field cs_mb_22" placeholder="Phone*" required />
//             {/* Address Line 1 */}
//             <input type="text" className="cs_form_field cs_mb_22" placeholder="Address Line 1 (required)*"
//                 required />
//             {/* Postcode */}
//             <input type="text" className="cs_form_field cs_mb_22" placeholder="Postcode*" required />
//             {/* Heating/Cooling checkboxes */}
//             <div className="cs_mb_22">
//                 <label style={{ marginRight: "16px" }}>
//                     <input type="checkbox" name="service" value="Heating" style={{ marginRight: "6px" }} />
//                     Heating
//                 </label>
//                 <label>
//                     <input type="checkbox" name="service" value="Cooling" style={{ marginRight: "6px" }} />
//                     Cooling
//                 </label>
//             </div>
//             {/* Service Type */}
//             <select className="cs_form_field cs_mb_22" required defaultValue="">
//                 <option value="" disabled>Service Type*</option>
//                 <option value="Servicing">Servicing</option>
//                 <option value="Repair">Repair</option>
//                 <option value="Installation">Installation</option>
//                 <option value="Maintenance">Maintenance</option>
//             </select>
//             {/* Date and Time */}
//             <div className="cs_mb_22 d-flex" style={{ gap: "10px" }}>
//                 <input type="date" className="cs_form_field" required style={{ flex: 1 }} />
//                 <input type="time" className="cs_form_field" required style={{ flex: 1 }} />
//             </div>
//             {/* Additional Information */}
//             <textarea cols="30" rows="4" className="cs_form_field cs_mb_22" placeholder="Additional Information..." />
//             {/* Submit */}
//             <button className="cs_btn cs_style_1 w-100" type="submit">
//                 <span>Appointment Now</span>
//             </button>
//         </form>
//     );
// };

// export default Form3;

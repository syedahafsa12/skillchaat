'use client'
import { BackgroundBeams } from '@/components/ui/background-beams';
import React, { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';

function MusicSchoolContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone:'',
    dob:'',
    message: ''
  });

  // const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   const response = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     },
  //     body: JSON.stringify({
  //       ...formData,
  //       access_key: "access_key", "a77cb2ef-182b-48bc-9661-2c716e84db6e"
  //     })
  //   });

  //   const result = await response.json();
  //   if (result.success) {
  //     // Show a success message to the user
  //     alert("Form submitted successfully! Thank you.");

  //     // Optionally, you can reset the form after submission
  //     setFormData({
  //       name: '',
  //       email: '',
  //       message: ''
  //     });

  //     console.log(result);
  //   }
  // };
  async function handleSubmit(event:any) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a77cb2ef-182b-48bc-9661-2c716e84db6e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              body: json
    });
    const result = await response.json();
    if (result.success) {
        alert('Form Submitted Succesfully!')

        event.target.reset();

      console.log(result);
    }
}

  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-20  relative">
      {/* BackgroundBeams and Content remain unchanged */}
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="text-lg md:text-7xl sm:text-10xl text-center font-sans font-bold mb-8 text-orange">
          Contact Us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
        Ready to dive into web development? Our admission form is your gateway. Register Now!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="rounded-lg border border-white  w-full p-4 bg-orange placeholder:text-neutral-700"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email address"
            className="rounded-lg border border-white  w-full p-4 bg-orange placeholder:text-neutral-700"
            required
          />
          
<input
  type="tel" // Use "tel" type for phone numbers
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  placeholder="Your phone number"
  className="rounded-lg border border-white w-full p-4 bg-orange placeholder:text-neutral-700"
  required
/>

<div>
  <label htmlFor="dob" className="ml-3 block text-sm font-medium text-neutral-700">
    Date of Birth
  </label>
  <input
    type="date"
    id="dob"
    name="dob"
    value={formData.dob}
    onChange={handleChange}
    className="rounded-lg border border-white w-full p-4 bg-orange placeholder:text-neutral-700"
    required
  />
</div>
<input
  type="text"
  name="course"
  value="Course Web Development" // Default value for the web development course
  readOnly // Make the input read-only so users can't change the course
  className="rounded-lg border border-white w-full p-4 bg-orange placeholder:text-neutral-700"
/>
<input
  type="text"
  name="Fee"
  value="Course Fee Rs 2000" // Default value for the web development course
  readOnly // Make the input read-only so users can't change the course
  className="rounded-lg border border-white w-full p-4 bg-orange placeholder:text-neutral-700"
/>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            className="rounded-lg border border-white  w-full p-4 bg-orange placeholder:text-neutral-700"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-orange text-white font-medium hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default MusicSchoolContactUs;

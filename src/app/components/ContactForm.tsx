



"use client";
import { useState, ChangeEvent, FormEvent } from 'react';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [error, setError] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required.');
      return;
    }

    setError('');
    setSuccessMessage('Form submitted successfully!');

    // Reset form data
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onClick={handleSubmit} className="max-w-2xl mx-auto p-4 border rounded w-full">
      {error && <p className="text-red-500">{error}</p>}
      {successMessage && <p className="text-yellow-500">{successMessage}</p>}

      <div className="mb-4">
        <label className="block text-[#AF3CFF]">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-[#AF3CFF]">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-[#AF3CFF]">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <button type="submit" className="bg-[#AF3CFF] text-white py-2 px-4 rounded">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;



// "use client";
// import { useState } from 'react';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleChange = (e:any) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e:any) => {
//     e.preventDefault();

//     if (!formData.name || !formData.email || !formData.message) {
//       setError('All fields are required.');
//       return;
//     }

//     setError('');
//     setSuccessMessage('Form submitted successfully!');

//     // Reset form data
//     setFormData({ name: '', email: '', message: '' });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4 border rounded w-full">
      
//       {error && <p className="text-red-500">{error}</p>}
//       {successMessage && <p className="text-yellow-500">{successMessage}</p>}

//       <div className="mb-4">
//         <label className="block text-[#AF3CFF]">Name</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full px-3 py-2 border rounded"
//           required
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-[#AF3CFF]">Email</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full px-3 py-2 border rounded"
//           required
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-[#AF3CFF]">Message</label>
//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           className="w-full px-3 py-2 border rounded"
//           required
//         />
//       </div>

//       <button type="submit" className="bg-[#AF3CFF] text-white py-2 px-4 rounded">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default ContactForm;





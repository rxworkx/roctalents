"use client";
import { useState } from 'react';
import Button from './Button';
interface iprops {
    noheading?:string
}

export default function ContactForm(props:iprops) {
  const svUrl=process.env.NEXT_PUBLIC_SV_URL;
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    country: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`${svUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setResponseMessage('Your message has been sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          organization: '',
          country: '',
          message: '',
        });
      } else {
        setResponseMessage('Failed to send message: ' + result.message);
      }
    } catch (error) {
      setResponseMessage('An error occurred: ' + error);
    }
  };

  return (
    <div className='container mx-auto py-20 px-5 lg:px-10'>
    {props.noheading ? (
      null
     ) : (
        <div className="py-7">
            <h5>Contact Us</h5>
            <hr className="py-4"/>
            <h4>Want to learn more? Please get in touch.</h4>
        </div>
      )}   

      {responseMessage && (
        <div className={`mb-4 p-2 rounded ${responseMessage.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {responseMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <div className='grid lg:grid-cols-2 gap-5'>
            <div className="mb-4">
            <label htmlFor="firstName" className="block font-medium text-gray-700">First Name</label>
            <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="John"
                className="appearance-none w-full border-b py-2 focus:border-green-500 focus:outline-none"
            />
            </div>

            {/* Last Name */}
            <div className="mb-4">
            <label htmlFor="lastName" className="block font-medium text-gray-700">Last Name</label>
            <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Doe"
                className="appearance-none w-full border-b py-2 focus:border-green-500 focus:outline-none"
            />
            </div>

            {/* Email */}
            <div className="mb-4">
            <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john.doe@example.com"
                className="appearance-none w-full border-b py-2 focus:border-green-500 focus:outline-none"
            />
            </div>

            {/* Organization */}
            <div className="mb-4">
            <label htmlFor="organization" className="block font-medium text-gray-700">Organization</label>
            <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                required
                placeholder="Company Inc."
                className="appearance-none w-full border-b py-2 focus:border-green-500 focus:outline-none"
            />
            </div>

            {/* Country */}
            <div className="mb-4">
            <label htmlFor="country" className="block font-medium text-gray-700">Country</label>
            <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                placeholder="USA"
                className="appearance-none w-full border-b py-2 focus:border-green-500 focus:outline-none"
            />
            </div>

            {/* Message */}
            <div className="lg:col-span-2 mb-4">
            <label htmlFor="message" className="block font-medium text-gray-700">Message</label>
            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={2}
                required
                placeholder="Write your message here..."
                className="appearance-none w-full border-b py-2 focus:border-green-500 focus:outline-none"
            ></textarea>
            </div>
            {responseMessage && (
        <div className={`lg:col-span-2 mb-4 p-2 rounded ${responseMessage.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {responseMessage}
        </div>
      )}
            {/* Submit Button */}
            <div className="text-right">
            <Button className="bg-black text-white w-full"type="submit" theme='alpha'>SEND</Button>
            </div>
        </div>
      </form>
    </div>
  );
}

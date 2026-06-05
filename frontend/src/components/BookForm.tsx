"use client";
import { useState } from 'react';
import axios from 'axios';
import Button from './Button';
interface iprops {
    noheading?:string,
    talentalias?:string,
}

export default function BookForm(props:iprops) {
  const svUrl=process.env.NEXT_PUBLIC_SV_URL;
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    talentalias: props.talentalias || '',
    budget: '',
    venue: '',
    location: '',
    eventdate: '',
    country: '',
    socials: '',
    comments: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }; 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.firstname || !formData.lastname || !formData.email) {
        setResponseMessage('First Name, Last Name, and Email are compulsory.');
        return;
      }
    try {
      await axios.post(`${svUrl}/api/booking`, formData);
      setResponseMessage('Booking form submitted successfully');
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        talentalias: props.talentalias || '',
        budget: '',
        venue: '',
        location: '',
        eventdate: '',
        country: '',
        socials: '',
        comments: '',
      });
    } catch (error) {
        setResponseMessage('Error submitting the form');
        console.error(error);
    }
  };


  return (
    <div className='container mx-auto px-5'>
    {props.noheading ? (
      null
     ) : (
        <div className="py-7">
            <h5>Book Form</h5>
            <hr className="py-4"/>
            <h4>Reserve your talent</h4>
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
            <label htmlFor="firstname" className="block font-medium text-gray-700">First Name</label>
            <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
                placeholder="John"
                className="appearance-none w-full border-b py-2 focus:border-green-500 focus:outline-none"
            />
            </div>

            {/* Last Name */}
            <div className="mb-4">
            <label htmlFor="lastname" className="block font-medium text-gray-700">Last Name</label>
            <input
                type="text"
                name="lastname"
                value={formData.lastname}
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
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john.doe@example.com"
                className="appearance-none w-full border-b py-2 focus:border-green-500 focus:outline-none"
            />
            </div>

            {/* Phone */}
            <div className="mb-4">
            <label htmlFor="phone" className="block font-medium text-gray-700">Phone</label>
            <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+14325678910"
                className="appearance-none w-full border-b py-2 focus:border-green-500 focus:outline-none"
            />
            </div>

            {/* TalentAlias */}
            <div className="mb-4">
            <label htmlFor="talentalias" className="block font-medium text-gray-700">Talent Alias</label>
            <input
                type="text"
                name="talentalias"
                value={formData.talentalias}
                onChange={handleChange}
                placeholder="Rewis Dason"
                className="appearance-none w-full border-b py-2 focus:border-green-500 focus:outline-none"
            />
            </div>

            {/* Budget */}
            <div className="mb-4">
            <label htmlFor="budget" className="block font-medium text-gray-700">Budget</label>
            <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="$3500"
                className="appearance-none w-full border-b py-2 focus:border-green-500 focus:outline-none"
            />
            </div>

            {/* Venue */}
            <div className="mb-4">
            <label htmlFor="venue" className="block font-medium text-gray-700">Venue</label>
            <input
                type="text"
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                placeholder="THE MASTER HALL OF ENTERTAINMENT"
                className="appearance-none w-full border-b py-2 focus:border-green-500 focus:outline-none"
            />
            </div>

            {/* Location */}
            <div className="mb-4">
            <label htmlFor="location" className="block font-medium text-gray-700">Location</label>
            <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="123 Main Street, New York, USA"
                className="appearance-none w-full border-b py-2 focus:border-green-500 focus:outline-none"
            />
            </div>

            {/* Eventdate */}
            <div className="mb-4">
            <label htmlFor="eventdate" className="block font-medium text-gray-700">Eventdate</label>
            <input
                type="date"
                name="eventdate"
                value={formData.eventdate}
                onChange={handleChange}
                placeholder=""
                className="appearance-none w-full border-b py-2 focus:border-green-500 focus:outline-none"
            />
            </div>

             {/* Country */}
            <div className="mb-4">
            <label htmlFor="country" className="block font-medium text-gray-700">Country</label>
            <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="appearance-none w-full border-b py-2 focus:border-green-500 focus:outline-none"
            >
                <option value="">Select Country</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="UK">UK</option>
                {/* Add more countries as needed */}
            </select>
            </div>

            {/* Socials */}
            <div className="mb-4">
            <label htmlFor="socials" className="block font-medium text-gray-700">Telegram</label>
            <input
                type="text"
                name="socials"
                value={formData.socials}
                onChange={handleChange}
                placeholder="+12345678"
                className="appearance-none w-full border-b py-2 focus:border-green-500 focus:outline-none"
            />
            </div>


            {/* Comments */}
            <div className="lg:col-span-2 mb-4">
            <label htmlFor="comments" className="block font-medium text-gray-700">Comments</label>
            <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                rows={2}
                placeholder="Write your comments here..."
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

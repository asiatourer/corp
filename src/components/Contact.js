import React from 'react';

const Contact = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h3 className="text-2xl font-bold text-center mb-6">Contact Us</h3>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" className="input input-bordered w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="input input-bordered w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input type="tel" className="input input-bordered w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea className="textarea textarea-bordered w-full"></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-full">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
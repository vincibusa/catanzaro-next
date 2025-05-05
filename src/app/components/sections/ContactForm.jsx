'use client';

import { useState } from 'react';

const ContactForm = ({ services }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Get checked services
    data.services = Array.from(form.querySelectorAll('input[name="services"]:checked'))
      .map(checkbox => checkbox.value);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Errore durante l\'invio del messaggio');
      }

      alert('Messaggio inviato con successo!');
      form.reset();
    } catch (error) {
      alert('Si è verificato un errore. Riprova più tardi.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Nome e cognome *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
            placeholder="Il tuo nome"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
            placeholder="La tua email"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
            Telefono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
            placeholder="Il tuo numero di telefono"
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
            Azienda
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
            placeholder="La tua azienda"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Servizi di interesse
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {services.map((service) => (
            <div key={service} className="flex items-center">
              <input
                type="checkbox"
                id={service}
                name="services"
                value={service}
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
              />
              <label htmlFor={service} className="ml-2 text-gray-700">
                {service}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
          Messaggio *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows="5"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none"
          placeholder="Descrivi il tuo progetto o la tua richiesta..."
        ></textarea>
      </div>
      
      <div className="mb-8">
        <div className="flex items-center">
          <input
            id="privacy"
            name="privacy"
            type="checkbox"
            required
            className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
          />
          <label htmlFor="privacy" className="ml-2 text-gray-700 text-sm">
            Acconsento al trattamento dei dati personali secondo la{' '}
            <a href="/privacy-policy" className="text-red-600 hover:underline">
              Privacy Policy
            </a>
            . *
          </label>
        </div>
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Invio in corso...' : 'Invia messaggio'}
      </button>
    </form>
  );
};

export default ContactForm;

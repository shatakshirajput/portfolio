
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 relative inline-block">
            Contact <span className="text-orange-500">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-2">
            Feel free to reach out for collaboration or just to say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-6 text-primary">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 bg-primary/10 p-3 rounded-full text-primary mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">Ghaziabad, Uttar Pradesh, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-primary/10 p-3 rounded-full text-primary mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400">shatakshirajput02@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-primary/10 p-3 rounded-full text-primary mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-400">91+ 7307261086</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="p-3 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-6 text-primary">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                  ></textarea>
                </div>
                
                <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send size={16} className="mr-2" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

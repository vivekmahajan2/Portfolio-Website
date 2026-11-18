import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Clock,
  MessageSquare
} from 'lucide-react';
import { personalInfo } from '../data/personal';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setErrorMessage('');

    try {
      // Send to Formspree endpoint or fallback
      const response = await fetch('https://formspree.io/f/mrbewpke', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // If external endpoint is not yet configured or returned non-200, offer graceful mailto fallback
        throw new Error('Direct service currently unreachable. Opening mail client fallback...');
      }
    } catch (err: any) {
      // In case of network restriction or unconfigured key, fall back to opening direct mailto with user's content
      const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
      const body = encodeURIComponent(`Hello Vivek,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

      setStatus('error');
      setErrorMessage(
        'Direct web submission had a network timeout. Your default email client was opened with your message prefilled!'
      );
    }
  };

  return (
    <section id="contact" className="py-20 px-6 sm:px-12 md:px-16 lg:px-20 bg-[#0B1120] text-white border-t border-[#1F293D]/40">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-widest text-[#00A6D6] font-bold">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-white tracking-tight">
            Contact Me
          </h2>
          <div className="w-16 h-1 bg-[#00A6D6] rounded mt-3" />
          <p className="text-sm text-gray-400 mt-4 max-w-2xl">
            Interested in discussing AI architectures, exploring potential collaboration, or recruiting for an engineering position? Let's connect.
          </p>
        </div>

        {/* Contact Layout: Info cards + Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-5">
            {/* Location Card */}
            <div className="p-5 rounded-xl bg-[#111827] border border-[#1F293D] flex items-start gap-4 hover:border-[#00A6D6]/40 transition-colors">
              <div className="p-3 rounded-lg bg-[#050B14] border border-gray-800 text-[#00A6D6] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Location</h4>
                <p className="text-xs text-gray-300 mt-1">{personalInfo.location}</p>
                <p className="text-[11px] text-gray-500 mt-0.5">Open to on-site, hybrid, or remote roles</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-xl bg-[#111827] border border-[#1F293D] flex items-start gap-4 hover:border-[#00A6D6]/40 transition-colors">
              <div className="p-3 rounded-lg bg-[#050B14] border border-gray-800 text-[#00A6D6] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Direct Email</h4>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-xs text-[#00A6D6] hover:underline mt-1 block font-mono"
                >
                  {personalInfo.email}
                </a>
                <p className="text-[11px] text-gray-500 mt-0.5">Responses typically within 24 hours</p>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="p-5 rounded-xl bg-[#111827] border border-[#1F293D] hover:border-[#00A6D6]/40 transition-colors">
              <h4 className="text-sm font-bold text-white mb-3">Connect on Professional Networks</h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#050B14] hover:bg-[#00A6D6]/10 text-gray-300 hover:text-[#00A6D6] border border-gray-800 text-xs font-medium transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#00A6D6]" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#050B14] hover:bg-[#00A6D6]/10 text-gray-300 hover:text-[#00A6D6] border border-gray-800 text-xs font-medium transition-colors"
                >
                  <Github className="w-4 h-4 text-[#00A6D6]" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="p-5 rounded-xl bg-[#050B14] border border-emerald-500/20 text-xs text-gray-300">
              <div className="flex items-center gap-2 font-semibold text-emerald-400 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Currently Available</span>
              </div>
              <p className="text-[11px] text-gray-400">
                Available for AI/ML, Generative AI, Agentic AI & Computer Vision (CV) Internships and Graduate Engineer Trainee (GET) Opportunities              </p>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#111827] border border-[#1F293D] shadow-xl">
              <h3 className="text-lg font-bold text-white mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-gray-400 mb-6">
                Fill out the form below and I will get back to you promptly.
              </p>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-emerald-300">Message Delivered Successfully!</h5>
                    <p className="text-xs text-emerald-400/90 mt-0.5">
                      Thank you for reaching out. I have received your note and will reply soon.
                    </p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-amber-300">Notice</h5>
                    <p className="text-xs text-amber-300/90 mt-0.5">
                      {errorMessage}
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-gray-300 mb-1.5">
                      Your Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full bg-[#050B14] border rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none transition-colors ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-800 focus:border-[#00A6D6]'
                        }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-300 mb-1.5">
                      Your Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@company.com"
                      className={`w-full bg-[#050B14] border rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none transition-colors ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-800 focus:border-[#00A6D6]'
                        }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-gray-300 mb-1.5">
                    Subject / Discussion Topic <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. AI Engineering Collaboration / Opportunity"
                    className={`w-full bg-[#050B14] border rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none transition-colors ${errors.subject ? 'border-red-500 focus:border-red-500' : 'border-gray-800 focus:border-[#00A6D6]'
                      }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-red-400 mt-1">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-gray-300 mb-1.5">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share details about your project, idea, or role..."
                    className={`w-full bg-[#050B14] border rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none transition-colors resize-none ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-800 focus:border-[#00A6D6]'
                      }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#00A6D6] hover:bg-[#0090BB] disabled:opacity-50 text-white font-semibold text-xs transition-all duration-200 shadow-md shadow-[#00A6D6]/20 cursor-pointer"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


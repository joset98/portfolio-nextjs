"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formStatus === 'loading') return;

    setFormStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 5000); // Reset after 5 seconds
    }, 2000);
  };

  return (
    <section id="contact" className="relative z-10 py-16 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-5xl font-bold text-center">Contacto</h2>
        <p className="max-w-xl mx-auto text-center text-gray-600 mb-12">
          ¿Tienes alguna pregunta o quieres trabajar juntos? No dudes en contactarme.
        </p>

        <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
          <div className="grid gap-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-inputBackground border border-inputBorder focus:border-primary outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-inputBackground border border-inputBorder focus:border-primary outline-none transition-colors"
                />
              </div>
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Mensaje"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-inputBorder focus:border-primary outline-none transition-colors resize-none bg-inputBackground"
              ></textarea>
            </div>
            <div className="flex flex-col items-center">
              <button
                type="submit"
                disabled={formStatus === 'loading'}
                className="flex justify-center items-center gap-2 px-8 py-3 text-white bg-primary bg-pink-600 rounded-full hover:bg-pink-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {formStatus === 'loading' ? 'Enviando...' : (
                  <>
                    <ArrowRight />
                    <span>Enviar Mensaje</span>
                  </>
                )}
              </button>
              {formStatus === 'success' && (
                <p className="mt-4 text-green-500">¡Mensaje enviado con éxito! Gracias por contactarme.</p>
              )}
              {formStatus === 'error' && (
                <p className="mt-4 text-red-500">Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.</p>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
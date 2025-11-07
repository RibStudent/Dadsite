import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import SEO, { createLocalBusinessSchema, createBreadcrumbSchema } from "@/components/SEO";
import {
  validateForm,
  sanitizeInput,
  checkRateLimit,
  updateRateLimit,
  type FormData,
} from "./formValidation";

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState(""); // Bot trap field

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot (if filled, it's a bot)
    if (honeypot) {
      toast.error("Submission failed. Please try again.");
      return;
    }

    // Check rate limiting
    const rateLimitCheck = checkRateLimit();
    if (!rateLimitCheck.isValid) {
      toast.error(rateLimitCheck.error);
      return;
    }

    // Validate form
    const validation = validateForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      const firstError = Object.values(validation.errors)[0];
      toast.error(firstError || "Please check your form inputs");
      return;
    }

    // Clear any previous errors
    setErrors({});
    setIsSubmitting(true);

    try {
      // Sanitize inputs
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        phone: sanitizeInput(formData.phone),
        company: sanitizeInput(formData.company),
        message: sanitizeInput(formData.message),
      };

      // Get Web3Forms access key from environment
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

      if (!accessKey) {
        throw new Error("Form configuration error. Please contact the site administrator.");
      }

      // Prepare form data for Web3Forms
      const web3FormsData = {
        access_key: accessKey,
        name: sanitizedData.name,
        email: sanitizedData.email,
        phone: sanitizedData.phone || "Not provided",
        company: sanitizedData.company || "Not provided",
        message: sanitizedData.message,
        subject: `New Contact Form Submission from ${sanitizedData.name}`,
        from_name: "SGT Infrastructure Website",
        // Add timestamp and source for tracking
        submission_time: new Date().toISOString(),
        source: "Contact Form - sgtinfrastructure.com",
      };

      // Submit to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(web3FormsData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Success!
        toast.success(
          "Thank you for your inquiry! We'll be in touch within 24 hours.",
          {
            duration: 5000,
          }
        );

        // Update rate limit
        updateRateLimit();

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error(
        "Sorry, there was an error sending your message. Please try again or contact us directly at info@sgtinfrastructure.com",
        {
          duration: 7000,
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "0477 336 719",
      link: "tel:0477336719",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@sgtinfrastructure.com",
      link: "mailto:info@sgtinfrastructure.com",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Coomera, Queensland",
      link: null,
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Friday, 8:00 AM - 5:00 PM",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Contact SGT Infrastructure Consulting - Coomera, Gold Coast, Queensland"
        description="Contact SGT Infrastructure Consulting for expert infrastructure project management and civil engineering services. Based in Coomera, serving the Gold Coast, Brisbane, and Queensland. Get in touch with Simon Thomas RPEQ for your next major infrastructure project."
        keywords={[
          'contact infrastructure consultant Queensland',
          'infrastructure consulting Coomera',
          'civil engineering Gold Coast',
          'project management Brisbane',
          'contact RPEQ engineer',
          'infrastructure consultant near me',
          'Coomera consulting services',
          'Gold Coast infrastructure',
          'Queensland civil engineering',
          'contact Simon Thomas',
          'infrastructure consulting contact',
          'project management contact Queensland',
          'engineering services Gold Coast',
          'major infrastructure consulting'
        ]}
        canonical="https://sgtinfrastructure.com.au/contact"
        structuredData={[
          createLocalBusinessSchema(),
          createBreadcrumbSchema([
            { name: 'Home', url: 'https://sgtinfrastructure.com.au/' },
            { name: 'Contact', url: 'https://sgtinfrastructure.com.au/contact' }
          ])
        ]}
      />
      {/* Hero Section */}
      <section id="main-content" className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-primary-foreground/90">
              Ready to discuss your infrastructure project? Contact us today to learn how
              we can support your development.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white" aria-labelledby="contact-form-heading">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="md:col-span-2">
              <Card>
                <CardContent className="pt-6">
                  <h2 id="contact-form-heading" className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate aria-label="Contact form">
                    {/* Honeypot field - hidden from users, catches bots */}
                    <div className="hidden" aria-hidden="true">
                      <input
                        type="text"
                        name="website"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          placeholder="Your full name"
                          className={`mt-2 ${errors.name ? "border-red-500 focus:ring-red-500" : ""}`}
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "name-error" : undefined}
                        />
                        {errors.name && (
                          <p id="name-error" className="text-sm text-red-600 mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          placeholder="your.email@example.com"
                          className={`mt-2 ${errors.email ? "border-red-500 focus:ring-red-500" : ""}`}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "email-error" : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" className="text-sm text-red-600 mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          placeholder="04XX XXX XXX"
                          className={`mt-2 ${errors.phone ? "border-red-500 focus:ring-red-500" : ""}`}
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? "phone-error" : undefined}
                        />
                        {errors.phone && (
                          <p id="phone-error" className="text-sm text-red-600 mt-1">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="company">Company / Organization</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          placeholder="Your company name"
                          className={`mt-2 ${errors.company ? "border-red-500 focus:ring-red-500" : ""}`}
                          aria-invalid={!!errors.company}
                          aria-describedby={errors.company ? "company-error" : undefined}
                        />
                        {errors.company && (
                          <p id="company-error" className="text-sm text-red-600 mt-1">
                            {errors.company}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        placeholder="Tell us about your project or inquiry..."
                        rows={6}
                        className={`mt-2 ${errors.message ? "border-red-500 focus:ring-red-500" : ""}`}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="text-sm text-red-600 mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>

                    <p className="text-sm text-muted-foreground">
                      * Required fields. Your information will be kept confidential.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <aside className="space-y-6" aria-labelledby="contact-info-heading">
              <div>
                <h2 id="contact-info-heading" className="text-2xl font-bold mb-6">Contact Information</h2>
                <address className="space-y-4 not-italic">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    const content = item.link ? (
                      <a
                        href={item.link}
                        className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
                        aria-label={`${item.title}: ${item.content}`}
                      >
                        {item.content}
                      </a>
                    ) : (
                      <span className="text-muted-foreground">{item.content}</span>
                    );

                    return (
                      <div key={index} className="flex gap-4">
                        <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{item.title}</h3>
                          {content}
                        </div>
                      </div>
                    );
                  })}
                </address>
              </div>

              <Card className="bg-muted/30">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Professional Details</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <span className="font-medium text-foreground">ABN:</span> 76 642 027 156
                    </p>
                    <p>
                      <span className="font-medium text-foreground">RPEQ:</span> 08668
                    </p>
                    <p>
                      <span className="font-medium text-foreground">Registration:</span> Civil Engineering
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Quick Response</h3>
                  <p className="text-sm text-primary-foreground/90">
                    We aim to respond to all inquiries within 24 hours during business days.
                  </p>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-muted/30" aria-labelledby="service-areas-heading">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="service-areas-heading" className="text-4xl font-bold mb-6">Service Areas</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Based in Coomera on the Gold Coast, we provide infrastructure consulting services 
              across Queensland and Australia. Our experience includes projects in Brisbane, 
              Gold Coast, Sunshine Coast, regional Queensland, and interstate locations.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card>
                <CardContent className="pt-6 text-center">
                  <h3 className="font-semibold mb-2">South East Queensland</h3>
                  <p className="text-sm text-muted-foreground">
                    Brisbane, Gold Coast, Sunshine Coast, Logan, Ipswich
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <h3 className="font-semibold mb-2">Regional Queensland</h3>
                  <p className="text-sm text-muted-foreground">
                    Toowoomba, Townsville, Cairns, Mackay, Rockhampton
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <h3 className="font-semibold mb-2">Interstate</h3>
                  <p className="text-sm text-muted-foreground">
                    NSW, Victoria, and other Australian states as required
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

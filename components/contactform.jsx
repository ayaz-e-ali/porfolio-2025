'use client';
import { useState } from "react";
import { Button } from "./button";

export default function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = `Message from ${form.name}`;
        const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0A${form.message}`;
        window.location.href = `mailto:ayaz.mo.ali@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    };

    return (
        <form onSubmit={handleSubmit} className="lg:w-2/3 mx-auto flex flex-col gap-2">
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full outline-0 rounded-xl p-3 border border-neutral-700 focus:border-neutral-400"
            />

            <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full outline-0 rounded-xl p-3 border border-neutral-700 focus:border-neutral-400"
            />

            <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full outline-0 rounded-xl p-3 border border-neutral-700 focus:border-neutral-400"
            />

            <Button type="submit" className={'lg:place-self-start'}>Send</Button>
        </form>
    );
}

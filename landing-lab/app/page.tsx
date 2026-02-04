import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center  gap-16 px-4">
      {/*Navbar */}
      <header className="w-full border-b">
        <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            LandingLab
          </Link>

          {/* Links */}
          <div className="hidden md:flex gap-6 text-sm">
            <Link href="#features" className="text-gray-600 hover:text-black">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-black">
              Pricing
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-black">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <Button size="sm">Get Started</Button>
        </nav>
      </header>
      {/* HERO SECTION */}
      <section className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-5xl font-bold">Build Faster Landing Pages</h1>

        <p className="text-gray-500 max-w-xl">
          I help businesses create clean, fast and conversion-focused landing
          pages using modern tools.
        </p>

        <div className="flex gap-4">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">
            Contact Us
          </Button>
        </div>
      </section>
      {/* FEATURES SECTION */}
      <section className="w-full max-w-5xl grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Fast Delivery</CardTitle>
            <CardDescription>
              Landing pages delivered in days, not weeks.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Modern Stack</CardTitle>
            <CardDescription>
              Built using Next.js, Tailwind and ShadCN UI.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Conversion Focused</CardTitle>
            <CardDescription>
              Clean layouts designed to convert visitors into customers.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="w-full max-w-3xl flex flex-col gap-8 text-center"
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="text-gray-500">
            Have a project in mind? Fill out the form and let’s talk.
          </p>
        </div>

        <form className="flex flex-col gap-6 text-left">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your name" />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your project"
              rows={4}
            />
          </div>

          <Button className="w-fit">Send Message</Button>
        </form>
      </section>

      {/* PRICING SECTION */}
      <section
        id="pricing"
        className="w-full max-w-6xl flex flex-col gap-10 text-center"
      >
        {/* Heading */}
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold">Pricing</h2>
          <p className="text-gray-500">
            Simple and transparent pricing. No hidden fees.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* BASIC PLAN */}
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Basic</CardTitle>
              <CardDescription>For small projects</CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col gap-6">
              <p className="text-4xl font-bold text-center">₹5,000</p>

              <ul className="text-sm text-gray-600 flex flex-col gap-2">
                <li>✓ 1 Landing Page</li>
                <li>✓ Responsive Design</li>
                <li>✓ Basic SEO</li>
              </ul>

              <Button variant="outline">Choose Plan</Button>
            </CardContent>
          </Card>

          {/* PRO PLAN (HIGHLIGHTED) */}
          <Card className="border-black">
            <CardHeader className="text-center">
              <CardTitle>Pro</CardTitle>
              <CardDescription>Most popular choice</CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col gap-6">
              <p className="text-4xl font-bold text-center">₹10,000</p>

              <ul className="text-sm text-gray-600 flex flex-col gap-2">
                <li>✓ Everything in Basic</li>
                <li>✓ Custom Sections</li>
                <li>✓ Contact Form</li>
                <li>✓ Deployment</li>
              </ul>

              <Button>Choose Plan</Button>
            </CardContent>
          </Card>

          {/* PREMIUM PLAN */}
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Premium</CardTitle>
              <CardDescription>For serious businesses</CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col gap-6">
              <p className="text-4xl font-bold text-center">₹15,000</p>

              <ul className="text-sm text-gray-600 flex flex-col gap-2">
                <li>✓ Everything in Pro</li>
                <li>✓ Backend Integration</li>
                <li>✓ Admin Dashboard</li>
                <li>✓ Priority Support</li>
              </ul>

              <Button variant="outline">Choose Plan</Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import { Shield, Eye, Lock, Binary } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

const features = [
  {
    icon: Binary,
    title: "What is LSB Steganography?",
    description: "LSB (Least Significant Bit) steganography is a technique that hides data in the least significant bits of image pixels, making changes virtually invisible to the human eye."
  },
  {
    icon: Shield,
    title: "Secure Communication",
    description: "Unlike encryption which makes data unreadable but visible, steganography conceals the very existence of the message, providing an additional layer of security."
  },
  {
    icon: Eye,
    title: "Undetectable Messages",
    description: "By modifying only the least significant bits, the changes to the image are so subtle that they're imperceptible, making the hidden message virtually undetectable."
  },
  {
    icon: Lock,
    title: "Privacy Protection",
    description: "Perfect for situations where you need to communicate sensitively while maintaining plausible deniability about the existence of hidden messages."
  }
];

export function InfoSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Understanding Steganography
              </h2>
              <p className="text-muted-foreground text-lg">
                Discover how SteganoSafe uses advanced steganography techniques to keep your messages secure and hidden.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className="bg-background rounded-lg p-6 shadow-sm border">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-muted-foreground">
                SteganoSafe makes steganography accessible to everyone while maintaining professional-grade security standards.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { FileImage, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InfoSection } from "@/components/sections/info-section";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

export default function Home() {
  return (
    <div className="w-full">
      <section className="py-20 md:py-32 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6 max-w-4xl mx-auto px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          🔒Secure Your Messages📩
            <span className="text-primary block mt-2">LSB Steganography</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
          Hide your words, no need to shout, in images 📸 where they can't get out 
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/encode">
                Start Encoding
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      <InfoSection />

      <section className="py-20 border-t">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          <ScrollAnimation delay={0.2}>
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <FileImage className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Image Support</h3>
              <p className="text-muted-foreground">
                Works with PNG images, preserving quality while hiding your data.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.3}>
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Secure Encoding</h3>
              <p className="text-muted-foreground">
                Advanced LSB technique ensures your messages remain undetectable.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.4}>
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <ArrowRight className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Easy to Use</h3>
              <p className="text-muted-foreground">
                Simple interface for encoding and decoding hidden messages.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
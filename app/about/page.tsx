"use client";

import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Card } from "@/components/ui/card";
import { Binary, Shield, Lock } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-12">
      <ScrollAnimation>
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">About LSB Steganography</h1>
            <p className="text-lg text-muted-foreground">
              Understanding the science behind secure message hiding
            </p>
          </div>

          <div className="space-y-8">
            <ScrollAnimation>
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <Binary className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h2 className="text-xl font-semibold mb-2">How It Works</h2>
                    <p className="text-muted-foreground">
                      LSB (Least Significant Bit) steganography works by replacing the least significant bits of pixel data in an image with bits from the secret message. Since these changes are minimal, they're virtually undetectable to the human eye, making it an effective method for hiding information in plain sight.
                    </p>
                  </div>
                </div>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation>
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h2 className="text-xl font-semibold mb-2">Security Considerations</h2>
                    <p className="text-muted-foreground">
                      While LSB steganography provides excellent concealment, it's important to understand that it's not encryption. For maximum security, consider encrypting your message before encoding it into an image. This provides two layers of protection: hiding the existence of the message and making it unreadable even if detected.
                    </p>
                  </div>
                </div>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation>
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <Lock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h2 className="text-xl font-semibold mb-2">Best Practices</h2>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Use PNG images for better quality and reliability</li>
                      <li>Keep messages concise to minimize image alterations</li>
                      <li>Use unique, inconspicuous carrier images</li>
                      <li>Consider encrypting sensitive messages before encoding</li>
                      <li>Don't reuse the same image multiple times</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}
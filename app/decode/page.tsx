"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { LSBSteganography } from "@/lib/steganography";

export default function DecodePage() {
  const [image, setImage] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "image/png") {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);

      try {
        setLoading(true);
        const decodedMessage = await LSBSteganography.decode(file);
        setMessage(decodedMessage);
      } catch (error) {
        console.error("Decoding failed:", error);
        setMessage("No hidden message found or the image is corrupted.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="py-12">
      <ScrollAnimation>
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Decode Hidden Message</h1>
            <p className="text-muted-foreground">
              Upload an image containing a hidden message to decode it.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium">Upload Image (PNG only)</label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="h-8 w-8 mb-4 text-muted-foreground" />
                    {preview ? (
                      <img src={preview} alt="Preview" className="max-h-40 object-contain" />
                    ) : (
                      <p className="text-sm text-muted-foreground">Click to upload a PNG image</p>
                    )}
                  </div>
                  <Input
                    type="file"
                    className="hidden"
                    accept="image/png"
                    onChange={handleImageUpload}
                  />
                </label>
              </div>
            </div>

            {message && (
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-medium mb-2">Decoded Message:</h3>
                <p className="text-muted-foreground whitespace-pre-wrap">{message}</p>
              </div>
            )}

            {loading && (
              <div className="text-center text-muted-foreground">
                Decoding message...
              </div>
            )}
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}
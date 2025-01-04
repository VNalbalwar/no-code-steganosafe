"use client";

import { useState } from "react";
import { Upload, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { LSBSteganography } from "@/lib/steganography";

export default function EncodePage() {
  const [image, setImage] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "image/png") {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleEncode = async () => {
    if (!image || !message) return;

    try {
      setLoading(true);
      const encodedImage = await LSBSteganography.encode(image, message);
      const url = URL.createObjectURL(encodedImage);
      const a = document.createElement("a");
      a.href = url;
      a.download = "encoded-image.png";
      a.click();
      URL.revokeObjectURL(url);

      // Reset image, preview, and message states
      setImage(null);
      setPreview(null);
      setMessage("");
    } catch (error) {
      console.error("Encoding failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12">
      <ScrollAnimation>
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Encode Your Message</h1>
            <p className="text-muted-foreground">
              Upload an image and enter your secret message to encode it using LSB steganography.
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

            <div className="space-y-2">
              <label className="block text-sm font-medium">Secret Message</label>
              <Textarea
                placeholder="Enter your secret message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
              />
            </div>

            <Button
              onClick={handleEncode}
              disabled={!image || !message || loading}
              className="w-full"
            >
              <Download className="mr-2 h-4 w-4" />
              {loading ? "Encoding..." : "Encode and Download"}
            </Button>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}

import {
  BsFillPersonFill,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsHash,
} from "react-icons/bs";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">About SteganoSafe</h3>
            <p className="text-sm text-muted-foreground">
              Secure your messages with LSB steganography. Hide data within
              images without compromising visual quality.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/encode"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Encode Message
                </Link>
              </li>
              <li>
                <Link
                  href="/decode"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Decode Message
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Learn More
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                target="_blank"
                href="https://viraj-verse.vercel.app/"
                className="text-muted-foreground hover:text-foreground"
              >
                <BsFillPersonFill className="h-5 w-5" />
              </a>
              <a
                target="_blank"
                href="https://github.com/VNalbalwar"
                className="text-muted-foreground hover:text-foreground"
              >
                <BsGithub className="h-5 w-5" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/viraj_nalbalwar/"
                className="text-muted-foreground hover:text-foreground"
              >
                <BsInstagram className="h-5 w-5" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/viraj-nalbalwar-895365255/"
                className="text-muted-foreground hover:text-foreground"
              >
                <BsLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} SteganoSafe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

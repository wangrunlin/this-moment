"use client";

import Link from "next/link";

import { TypographyH1, TypographyP } from "@/components/typography";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <main className="text-center mt-16">
      <TypographyH1>About</TypographyH1>
      <footer>
        <TypographyP className="mb-8">about content</TypographyP>

        <Button asChild>
          <Link
            href="https://github.com/wangrunlin/this-moment"
            target="_blank"
          >
            GitHub
          </Link>
        </Button>

        <Button variant="link" className="mt-8" size="lg" asChild>
          <Link href="https://this-moment.vercel.app">Homepage</Link>
        </Button>
      </footer>
    </main>
  );
}

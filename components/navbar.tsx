/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lJwnQlHSEBA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"

import { Menu, MountainSnow } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  return (
    <header className='flex justify-center'>
      <div className="flex h-20 w-full max-w-5xl shrink-0 items-center px-6 sm:px-8">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="sm:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link href="#" className="mr-6 hidden sm:flex" prefetch={false}>
              <MountainSnow className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <div className="grid gap-2 py-6">
              <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                Home
              </Link>
              <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                About
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        <div className='sm:hidden flex-1'></div>
        <div className='sm:hidden flex'>
          <ModeToggle />
        </div>
        <Link href="#" className="mr-6 hidden sm:flex" prefetch={false}>
          <MountainSnow className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto hidden sm:flex gap-6 not-prose">
          <Button className="w-fit" variant="link" asChild>
            <Link href="#">Home</Link>
          </Button>
          <Button className="w-fit" variant="link" asChild>
            <Link href="#">About</Link>
          </Button>
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}
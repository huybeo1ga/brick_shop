"use client"

import { useRouter, usePathname } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSwitcher({ locale }: { locale: string }) {
  const router = useRouter()
  const pathname = usePathname()

  function onSelect(value: string) {
    const segments = pathname.split("/")
    segments[1] = value
    router.push(segments.join("/"))
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="gap-2 rounded-xl px-4 shadow-sm hover:shadow-md transition"
        >
          <span className="font-medium">
            {locale === "vi" ? "Tiếng Việt" : "English"}
          </span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-40 rounded-xl shadow-lg border bg-white"
      >
        <DropdownMenuRadioGroup value={locale} onValueChange={onSelect}>
          <DropdownMenuRadioItem value="vi">
            Tiếng Việt
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="en">
            English
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
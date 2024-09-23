import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { getLangFromUrl, useTranslatedPath } from "@/i18n/utils";
import { languages } from "@/i18n/ui";

interface Props {
  url: URL;
}

export function LanguagePicker({ url }: Props) {
  const currentLang = getLangFromUrl(url);
  const translatePath = useTranslatedPath(currentLang);
  // 移除当前语言前缀
  const pathWithoutLang = url.pathname.replace(new RegExp(`^/${currentLang}`), "") || "/";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline">
          {languages[currentLang]}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {Object.entries(languages).map(([lang, label]) => (
          <DropdownMenuItem key={lang}>
            <a href={translatePath(pathWithoutLang, lang)}>{label}</a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

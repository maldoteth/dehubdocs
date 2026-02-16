import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage, languages } from "@/contexts/LanguageContext";

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const current = languages.find(l => l.code === language);

  return (
    <div className="flex items-center gap-2 w-full">
      <Globe className="w-4 h-4 text-muted-foreground flex-shrink-0" />
      <Select value={language} onValueChange={(val) => setLanguage(val as any)}>
        <SelectTrigger className="h-8 border-none bg-transparent shadow-none px-1 text-foreground text-sm focus:ring-0 focus:ring-offset-0">
          <SelectValue>{current?.nativeLabel}</SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-popover border border-border z-50">
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              <span>{lang.nativeLabel}</span>
              <span className="text-muted-foreground ml-2 text-xs">({lang.label})</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

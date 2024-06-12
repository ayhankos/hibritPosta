import React, { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ComboboxDemoProps {
  options: string[];
  onSelect: (value: string) => void;
}

export function ComboboxDemo({ options, onSelect }: ComboboxDemoProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleSelect = (selectedValue: string) => {
    setValue(selectedValue);
    onSelect(selectedValue);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value ? value : "Select..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandEmpty>No items found.</CommandEmpty>
          <CommandGroup>
            {options.map((option) => (
              <CommandItem key={option} value={option} onSelect={handleSelect}>
                <Check
                  className={
                    value === option
                      ? "mr-2 h-4 w-4 opacity-100"
                      : "mr-2 h-4 w-4 opacity-0"
                  }
                />
                {option}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

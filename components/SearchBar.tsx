"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  city: string;
  setCity: (city: string) => void;
  onSearch: () => void;
}

export function SearchBar({ city, setCity, onSearch }: SearchBarProps) {
  return (
    <div className="flex gap-2 animate-fadeIn">
      <Input
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="bg-white/80 backdrop-blur-sm border-none shadow-lg"
        onKeyDown={(e) => e.key === "Enter" && onSearch()}
      />
      <Button
        onClick={onSearch}
        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg transition-all duration-300 hover:scale-105"
      >
        <Search className="h-4 w-4" />
      </Button>
    </div>
  );
}

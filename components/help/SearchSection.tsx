'use client';

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from 'lucide-react';
import { useContentStore } from '@/lib/store';


interface SearchSectionProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export default function SearchSection({ searchTerm, setSearchTerm }: SearchSectionProps) {
  return (
    <div className="max-w-md mx-auto mb-8">
      <Label htmlFor="search">Rechercher dans les FAQ</Label>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          id="search"
          type="text"
          placeholder="Tapez votre question ici..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>
    </div>
  );
}
'use client';

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from 'lucide-react';
import { SearchInput } from './SearchInput';

interface SearchSectionProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export default function SearchSection({ searchTerm, setSearchTerm }: SearchSectionProps) {
  return (
    <div className="max-w-md mx-auto mb-8">
      <Label htmlFor="search">Rechercher dans les FAQ</Label>
      <SearchInput 
        value={searchTerm}
        onChange={setSearchTerm}
      />
    </div>
  );
}
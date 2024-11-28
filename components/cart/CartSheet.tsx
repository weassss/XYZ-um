'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from '@/components/ui/sheet';
import { useContentStore } from '@/lib/store';

export default function CartSheet() {
  const { items, removeItem, updateQuantity, getItemCount } = useContentStore();
  const [isOpen, setIsOpen] = useState(false);

  const incrementQuantity = (id: number, currentQuantity: number) => {
    updateQuantity(id, currentQuantity + 1);
  };

  const decrementQuantity = (id: number, currentQuantity: number) => {
    if (currentQuantity > 1) {
      updateQuantity(id, currentQuantity - 1);
    } else {
      removeItem(id);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative w-10 h-10 rounded-full hover:bg-muted transition-colors duration-200"
        >
          <ShoppingCart className="h-5 w-5" />
          <span className="sr-only">Ouvrir le panier</span>
          {getItemCount() > 0 && (
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary flex items-center justify-center text-[11px] font-medium text-primary-foreground">
              {getItemCount()}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Panier</SheetTitle>
          <SheetDescription>
            {items.length === 0
              ? 'Votre panier est vide.'
              : `${getItemCount()} article${getItemCount() > 1 ? 's' : ''} dans votre panier.`}
          </SheetDescription>
        </SheetHeader>
        <div className="mt-8 flex-1 overflow-y-auto">
          <AnimatePresence mode="popLayout">
            {items.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center justify-center py-8"
              >
                <ShoppingCart className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-4">
                  Il n'y a aucun article dans votre panier.
                </p>
                <SheetClose asChild>
                  <Button asChild>
                    <Link href="/catalogue">Voir nos produits</Link>
                  </Button>
                </SheetClose>
              </motion.div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg"
                  >
                    <div className="relative h-16 w-16 overflow-hidden rounded-md">
                      <Image
                        src={item.image || '/placeholder.svg'}
                        alt={item.description}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{item.partNum}</p>
                      <p className="text-sm text-muted-foreground truncate">
                        {item.description}
                      </p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => decrementQuantity(item.id, item.quantity)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => incrementQuantity(item.id, item.quantity)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-destructive hover:text-destructive/90"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
        {items.length > 0 && (
          <SheetFooter className="mt-8">
            <Button className="w-full" size="lg">
              Passer à la caisse
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
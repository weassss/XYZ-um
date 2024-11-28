import { HomeSlice } from './slices/home';
import { AboutSlice } from './slices/about';
import { ServicesSlice } from './slices/services';
import { HelpSlice } from './slices/help';
import { ContactSlice } from './slices/contact';
import { JobsSlice } from './slices/jobs';
import { CatalogueSlice } from './slices/catalogue';
import { CartSlice } from './slices/cart';

export type ContentState = 
  HomeSlice & 
  AboutSlice & 
  ServicesSlice & 
  HelpSlice & 
  ContactSlice & 
  JobsSlice & 
  CatalogueSlice &
  CartSlice;
import { z } from 'zod';

// Helper schema for functions since they can't be directly validated
const functionSchema = z.any();

// Home schemas
const statSchema = z.object({
  number: z.string(),
  label: z.string(),
});

const featureSchema = z.object({
  title: z.string(),
  description: z.string(),
  vd: z.string(),
});

const clientSchema = z.object({
  name: z.string(),
  logo: z.string(),
});

const homeSchema = z.object({
  heroVideos: z.array(z.string()),
  stats: z.array(statSchema),
  features: z.array(featureSchema),
  clients: z.array(clientSchema),
  updateHomeContent: functionSchema,
});

// Services schemas
const serviceDetailSchema = z.object({
  title: z.string(),
  points: z.array(z.string()),
});

const serviceSchema = z.object({
  name: z.string(),
  description: z.string(),
  iconName: z.string(),
  details: z.array(serviceDetailSchema),
});

const serviceImageSchema = z.object({
  imageNumber: z.number(),
  imageSources: z.array(z.string()),
});

const whyChooseReasonSchema = z.object({
  iconName: z.string(),
  title: z.string(),
  description: z.string(),
});

const servicesSchema = z.object({
  services: z.array(serviceSchema),
  serviceImages: z.array(serviceImageSchema),
  whyChooseReasons: z.array(whyChooseReasonSchema),
  updateServicesContent: functionSchema,
});

// Jobs schemas
const jobBenefitSchema = z.object({
  title: z.string(),
  description: z.union([z.string(), z.array(z.string())]),
  iconName: z.string(),
  image: z.string(),
});

const jobsSchema = z.object({
  jobBenefits: z.array(jobBenefitSchema),
  updateJobsContent: functionSchema,
});

// Cart schemas
const cartItemSchema = z.object({
  id: z.number(),
  partNum: z.string(),
  description: z.string(),
  quantity: z.number(),
  image: z.string().optional(),
});

const cartSchema = z.object({
  items: z.array(cartItemSchema),
  addItem: functionSchema,
  removeItem: functionSchema,
  updateQuantity: functionSchema,
  clearCart: functionSchema,
  getItemCount: functionSchema,
  getTotal: functionSchema,
});

// Help schemas
const faqSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

const helpSchema = z.object({
  categories: z.array(z.string()),
  faqs: z.record(z.array(faqSchema)),
  updateHelpContent: functionSchema,
});

// Contact schemas
const contactInfoSchema = z.object({
  phone: z.string(),
  address: z.string(),
  email: z.object({
    sales: z.string(),
    support: z.string(),
  }),
});

const partnerSchema = z.object({
  name: z.string(),
  logo: z.string(),
  description: z.string(),
  countries: z.array(z.string()),
  specialties: z.array(z.string()),
});

const contactSchema = z.object({
  contactInfo: contactInfoSchema,
  partners: z.array(partnerSchema),
  countryCoordinates: z.record(z.tuple([z.number(), z.number()])),
  updateContactContent: functionSchema,
});

// About schemas
const teamMemberSchema = z.object({
  nom: z.string(),
  role: z.string(),
  image: z.string(),
  linkedin: z.string(),
  twitter: z.string(),
});

const timelineEventSchema = z.object({
  title: z.string(),
  content: z.object({
    text: z.string(),
    image: z.string(),
  }),
});

const aboutContentSchema = z.object({
  title: z.string(),
  description: z.array(z.string()),
  image: z.string(),
});

const aboutSchema = z.object({
  teamMembers: z.array(teamMemberSchema),
  timelineEvents: z.array(timelineEventSchema),
  aboutContent: aboutContentSchema,
  updateAboutContent: functionSchema,
});

// Catalogue schemas
const categorySchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  icon: z.string(),
});

const filterSchema = z.object({
  id: z.string(),
  name: z.string(),
  options: z.array(z.string()),
});

const sortOptionSchema = z.object({
  id: z.string(),
  name: z.string(),
  value: z.string(),
});

const catalogueSchema = z.object({
  categories: z.array(categorySchema),
  filters: z.array(filterSchema),
  sortOptions: z.array(sortOptionSchema),
  updateCatalogueContent: functionSchema,
});

// Combined content schema
export const contentSchema = z.object({
  ...homeSchema.shape,
  ...servicesSchema.shape,
  ...jobsSchema.shape,
  ...cartSchema.shape,
  ...helpSchema.shape,
  ...contactSchema.shape,
  ...aboutSchema.shape,
  ...catalogueSchema.shape,
}).partial();
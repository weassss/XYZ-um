import { StateCreator } from 'zustand';
import { ContentState } from '../types';

export interface HomeSlice {
  heroVideos: string[];
  stats: { number: string; label: string }[];
  features: {
    title: string;
    description: string;
    vd: string;
  }[];
  clients: {
    name: string;
    logo: string;
  }[];
  updateHomeContent: (content: Partial<HomeSlice>) => void;
}

export const createHomeSlice: StateCreator<ContentState, [], [], HomeSlice> = (set) => ({
  heroVideos: [
    '/media/herogirl.mp4',
    '/media/gravur.mp4',
    '/media/turbune200.mp4',
  ],
  stats: [
    { number: '7', label: 'Partenaires' },
    { number: '47', label: "Ans d'expérience" },
    { number: '50+', label: 'Pays' },
    { number: '200+', label: 'Clients' },
  ],
  features: [
    {
      title: 'Expertise',
      description: "Plus de 47 ans d'expérience dans l'industrie",
      vd: 'gravur',
    },
    {
      title: 'Innovation',
      description: 'Solutions de pointe pour la fabrication moderne',
      vd: 'iconecontenant',
    },
    {
      title: 'Fiabilité',
      description: 'Performance constante et support client exceptionnel',
      vd: 'iconeboutille',
    },
  ],
  clients: [
    {
      name: "Pepsi",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1c5951_01a05e86699746a38d7f4465ba9ac68f~mv2-QF2spuy8P6OCPuYrTeoSvsMOOex97V.png"
    },
    {
      name: "Plastipak",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1c5951_06022910383b4c1d953ddde610347896~mv2-QVlozE8jlGQ3VwWr5N4AWauQZ3zKDT.png"
    },
    {
      name: "Lassonde",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1c5951_324777a854fa4382862c11c850e5a6b1~mv2-Qw81L5l0yWNzDLS2olJOdruVocIdpr.png"
    },
    {
      name: "Eska",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1c5951_48d1721cab0c476baea2a3745b1d5f1a~mv2-8D8FUr9JbtLqsmnDy9CylNGxkegwb4.png"
    },
    {
      name: "Amcor",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1c5951_4b11cabb0b7047258668e2287ca482f3~mv2-FcntqQw1kNtWsxtqdPfF9v0hM7HD8W.png"
    },
    {
      name: "Coca-Cola",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1c5951_8f9f635aec944e669f094f82bd907079~mv2-1Rgy8yaguGjQpeGcX94zsNwXMnreev.png"
    },
    {
      name: "Refresco",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1c5951_9106672ef65e4686b8df97a2ee175438~mv2-sIBcPgiYDI704dqDUjgAbbK5bRNRsa.png"
    },
    {
      name: "Ocean Spray",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1c5951_99ada941dd464de1bf1fdf24c1a5df81~mv2-PGNYyReTIgqnvvkZiCGMxSLb4Jr2AH.png"
    },
    {
      name: "Nestlé",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1c5951_a032621654554d0ab98b25c9c4887e6a~mv2-kQICZRTzHqcEIoYjTi1WW7B0jKM9xK.png"
    },
    {
      name: "Danone",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1c5951_b48fbd3ed8dc433782c37c1ebec6b08b~mv2-IBpJJdrRbFpzHs0wuOrBn0extm2Xx1.png"
    },
    {
      name: "Ice River",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1c5951_c443204834c44adb9cf6776ba9a6c132~mv2-sQhQDXxynAK1RVueJruAwGGIIDNjIn.png"
    },
    {
      name: "Graham Packaging",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1c5951_cae8a0adacd84721bb5fc4c7c5e6c593~mv2-m8r7zwNVVUGxguewQ2s7VpSBwhsQMj.png"
    },
    {
      name: "Niagara",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1c5951_ddb72225923845b38710dfcc223807a4~mv2-iof79htVLZgSx7lEJSZbmQeLaKH0Dr.png"
    },
    {
      name: "Silgan Plastics",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1c5951_ebe6b632b46945d4bc10bec8d18b5e16~mv2-LmTPSnYTSydi0Ov7CRuDTiItwNYp1i.png"
    },
    {
      name: "Naya",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1c5951_f6defce4d5c04af187e699e60dc4ac5f~mv2-xUM8cjlaR6TgBXNyYDlE44v8Yar2k9.png"
    }
  ],
  updateHomeContent: (content) => set((state) => ({ ...state, ...content })),
});
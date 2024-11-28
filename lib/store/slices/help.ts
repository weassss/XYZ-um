import { StateCreator } from 'zustand';
import { ContentState } from '../types';

export interface HelpSlice {
  categories: string[];
  faqs: { [key: string]: { question: string; answer: string }[] };
  updateHelpContent: (content: Partial<HelpSlice>) => void;
}

export const createHelpSlice: StateCreator<ContentState, [], [], HelpSlice> = (set) => ({
  categories: [
    "Informations générales",
    "Catalogues de produits",
    "Soumission",
    "Livraison",
    "Paiement et facturation",
  ],
  faqs: {
    "Informations générales": [
      {
        question: "Quel type de produit UM offre ?",
        answer: "Nous offrons deux types de produits. En premier lieu, des pièces de rechange pour les souffleuses, remplisseuse, appareil de bouchage et étiqueteuses pour le PET. Dans un second lieu, des pièces pour les machines de thermoformage-remplissage-scellage alimentaire servant principalement à la fabrication de contenant de yogourt. Nous proposons également un service d'ingénierie pour concevoir des produits améliorés et personnalisés."
      },
      {
        question: "Quelles sont vos heures d'ouverture ?",
        answer: "Nous sommes ouverts du lundi au vendredi de 8h à 17h. Nous avons également un quart de travail de soir du lundi au jeudi jusqu'à 2h (heure de l'Est). Cependant, les représentants aux ventes sont disponibles en tout temps."
      },
      {
        question: "Puis-je avoir de l'assistance technique sur place ?",
        answer: "Oui, si vous désirez avoir de l'assistance technique sur place, demandez-le à l'un de nos représentants."
      },
      {
        question: "Comment puis-je avoir accès au service d'ingénierie pour un problème particulier ?",
        answer: "Vous pouvez contacter l'un de nos représentants aux ventes à sales@umallette.com."
      },
      {
        question: "Dans quels pays UM offre-t-il ses produits ?",
        answer: "Nous pouvons offrir nos produits dans tous les pays. Nous avons également un vaste réseau de partenaires qui offre un accompagnement local personnalisé."
      },
      {
        question: "UM est-il sur les réseaux sociaux ?",
        answer: "Oui, suivez-nous sur LinkedIn et Facebook."
      }
    ],
    "Catalogues de produits": [
      {
        question: "Comment puis-je accéder à vos catalogues de produits ?",
        answer: "Sur la page catalogues de notre site web ou cliquer ici."
      },
      {
        question: "La ou les pièce(s) que je recherche ne sont pas dans les catalogues de produits.",
        answer: "Nos catalogues sont en développement donc certaines pièces ne s'y trouvent pas encore. Veuillez contacter nos représentants pour connaître notre gamme complète de produits."
      }
    ],
    "Soumission": [
      {
        question: "Comment puis-je avoir une soumission ?",
        answer: "Envoyez vos listes de pièces à sales@umallette.com. Une soumission détaillée vous sera transmise en 24 à 48 heures."
      },
      {
        question: "Sous quel format dois-je envoyer une demande de soumission ?",
        answer: "Le format que vous utilisez pour lister vos pièces importe peu. PDF, Word, Excel, Google, etc."
      },
      {
        question: "En combien de temps puis-je obtenir une soumission ?",
        answer: "À la suite de votre demande, vous obtiendrez une soumission en 24 à 48 heures."
      }
    ],
    "Livraison": [
      {
        question: "Comment fonctionne la livraison ?",
        answer: "Vous pouvez utiliser votre propre compte FedEx, UPS, Purolator, Dicom, etc. Dans ce cas, vous devez nous fournir le numéro de votre compte. Sinon, nous pouvons prendre en charge le transport et ajouter les frais sur votre facture UM."
      },
      {
        question: "Quel est le délai de livraison ?",
        answer: "Le délai de livraison dépend de la disponibilité des pièces. Lorsque vous recevrez votre soumission, une date vous sera fournie. Si nous prenons en charge le transport, au Canada, nous utilisons le service express des transporteurs. En ce qui concerne les États-Unis et tous les autres pays, nous utilisons le service standard. Cependant, si vous désirez le service express, vous pouvez le mentionner lors de votre commande."
      },
      {
        question: "Qui dois-je contacter si j'ai un problème avec la livraison de mon colis ?",
        answer: "Vous pouvez contacter notre soutien administratif et logistique à l'adresse courriel logistic@umallette.com."
      }
    ],
    "Paiement et facturation": [
      {
        question: "Quelle devise acceptez-vous ?",
        answer: "Nous acceptons le dollar canadien (CAD), le dollar américain (USD) et l'euro (€)."
      },
      {
        question: "Comment puis-je payer ma commande ?",
        answer: "Les modes de paiement vous seront transmis par votre représentant lors de la confirmation de votre commande."
      },
      {
        question: "Quand vais-je recevoir ma facture ?",
        answer: "Entre 24 à 48 heures, jour ouvrable, après l'envoi de votre colis. Excepté si un paiement est exigé avant l'expédition. Dans ce cas, une facture proforma vous sera envoyée avant d'effectuer le paiement."
      }
    ]
  },
  updateHelpContent: (content) => set((state) => ({ ...state, ...content })),
});
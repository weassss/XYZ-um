import { env } from '@/env';

export async function generateProductImage(description: string): Promise<string> {
  try {
    const response = await fetch('https://api.getimg.ai/v1/stable-diffusion/text-to-image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${env.GETIMG_API_KEY}`,
      },
      body: JSON.stringify({
        prompt: `Professional product photo of ${description}, clean white background, studio lighting, high-end product photography, 8k, ultra detailed`,
        negative_prompt: "text, watermark, low quality, blurry, distorted, deformed, disfigured, bad anatomy, extra limbs",
        width: 768,
        height: 768,
        steps: 30,
        guidance_scale: 8.5,
        model_id: "stable-diffusion-xl",
        seed: Math.floor(Math.random() * 1000000),
        scheduler: "dpmsolver++",
        samples: 1
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate image');
    }

    const data = await response.json();
    return data.image.url;
  } catch (error) {
    console.error('Error generating image:', error);
    return 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/300x300-HIuIKytN8ir4XQvcGRqP7LfZj29o6q.svg';
  }
}
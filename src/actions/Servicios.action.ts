'use server';

import { API_URL } from '@/constants/general';

export const getServiceCarousel = async ({ slug }: { slug: string; }) => {
  try {
    console.log('url: ', `${API_URL}/${slug}?fields=name&populate=images`);
    const res = await fetch(`${API_URL}/${slug}?fields=name&populate=images`);
    const data = await res.json();

    console.log('response: ', data);

    return {
      error: false,
      data
    };
  } catch (error) {
    return {
      error: true,
      data: 'No se pudo conectar con la API'
    };
  }
};
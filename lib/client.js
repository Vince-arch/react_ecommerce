import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'pezm7v4o',
    dataset: 'production',
    apiVersion: '2022-12-20',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})



const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
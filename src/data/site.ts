// Datos generales del sitio. Cambia aquí y se actualiza en todas las páginas.

export const CC = 'https://citychurchmia.churchcenter.com';
const modal = '?open-in-church-center-modal=true';

export const links = {
  stayConnected: `${CC}/people/forms/917264${modal}`,
  joinHouseChurch: `${CC}/people/forms/488200${modal}`,
  serve: `${CC}/people/forms/1229750${modal}`,
  englishInterest: `${CC}/people/forms/1377062${modal}`,
  give: `${CC}/giving${modal}`,
  kidsEs: `${CC}/registrations/events/3800315`,
  kidsEn: `${CC}/registrations/events/3793386`,
  youtube: 'https://www.youtube.com/@citychurchmiami',
  instagramEs: 'https://www.instagram.com/iglesiadelaciudad.miami/',
  instagramEn: 'https://www.instagram.com/citychurch.miami/',
  facebook: 'https://www.facebook.com/iglesiadelaciudad.miami/',
  maps: 'https://www.google.com/maps/search/?api=1&query=John+I.+Smith+K-8+Center+10415+NW+52nd+St+Doral+FL+33178',
};

export const sunday = {
  time: '10:00 AM',
  place: 'John I. Smith K-8 Center',
  address: '10415 NW 52nd St, Doral, FL 33178',
};

export const playlists = {
  // Videos subidos al canal, sin Shorts (UULF + ID del canal). Siempre muestra el más reciente primero.
  latest: 'UULFEtoZshJbVrhcT87Ha3o7Ww',
  current: { name: 'El Caminar de un Discípulo', id: 'PLaAkblbOH2fM' },
  previous: [
    { name: '1 Corintios', id: 'PL71hlXEzBKMvOn89FJXQ18Cs7xWgynpcw' },
    { name: 'Mayordomía', id: 'PL71hlXEzBKMu0C2TbO67qRcy8dpnclGzV' },
    { name: 'Nehemías', id: 'PL71hlXEzBKMv73uLHHL0dyV_IGDdtcCr7' },
    { name: 'Adviento 2025', id: 'PL71hlXEzBKMtnfU93aGiD2kgN1RPuijTm' },
    { name: 'Hechos', id: 'PL71hlXEzBKMvnOEOLDhq9w3IfD0wvFyKa' },
    { name: 'Efesios', id: 'PL71hlXEzBKMuenxvh4Uc4PxBr8mauc7uy' },
    { name: 'Adviento 2024', id: 'PL71hlXEzBKMtCAGv7CveSEMko_4P77lR7' },
    { name: 'El Evangelio de Lucas', id: 'PL71hlXEzBKMus1sQYqP_3KqngZCNFM5wc' },
    { name: 'La Clave del Gozo (Filipenses)', id: 'PL71hlXEzBKMu7vzdCJHWW8u834E5aGBvk' },
  ],
};

// Reuniones de interés del grupo en inglés (mismas fechas que el formulario 1377062)
export const englishMeetings = {
  time: '6:00 PM',
  area: 'Doral',
  dates: ['Sunday, December 6', 'Sunday, January 10', 'Sunday, February 7', 'Sunday, March 7'],
};

export const playlistUrl = (id: string) => `https://www.youtube.com/playlist?list=${id}`;
export const playlistEmbed = (id: string) => `https://www.youtube-nocookie.com/embed/videoseries?list=${id}`;

export type Lang = 'es' | 'en';

// Rutas en cada idioma. La clave es la misma página.
export const routes = {
  home: { es: '/', en: '/en/' },
  about: { es: '/acerca/', en: '/en/about/' },
  jesus: { es: '/jesus/', en: '/en/jesus/' },
  teaching: { es: '/ensenanza/', en: '/en/teaching/' },
  community: { es: '/comunidad/', en: '/en/community/' },
  houses: { es: '/iglesias-en-casa/', en: '/en/house-churches/' },
  first: { es: '/primera-vez/', en: '/en/first-time/' },
  sunday: { es: '/sunday-gathering/', en: '/sunday-gathering/' },
  english: { es: '/en/english/', en: '/en/english/' },
  baptism: { es: '/bautismo/', en: '/en/baptism/' },
} as const;

export type RouteKey = keyof typeof routes;

export const nav: Record<Lang, { key: RouteKey; label: string }[]> = {
  es: [
    { key: 'about', label: 'Acerca' },
    { key: 'jesus', label: 'Jesús' },
    { key: 'teaching', label: 'Enseñanza' },
    { key: 'community', label: 'Comunidad' },
    { key: 'houses', label: 'Iglesias en casa' },
  ],
  en: [
    { key: 'about', label: 'About' },
    { key: 'jesus', label: 'Jesus' },
    { key: 'teaching', label: 'Teaching' },
    { key: 'community', label: 'Community' },
    { key: 'houses', label: 'House churches' },
  ],
};

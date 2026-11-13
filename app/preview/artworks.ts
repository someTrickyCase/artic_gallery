export const previewArtworks = [
    { id: 27992, title: "A Sunday on La Grande Jatte", artist: "Georges Seurat", year: "1884–86", image: "2d484387-2509-5e8e-2c43-22f9981972eb", category: "Painting" },
    { id: 28560, title: "The Bedroom", artist: "Vincent van Gogh", year: "1889", image: "6644829f-f292-c5c4-a73c-0356a6fdbf0d", category: "Painting" },
    { id: 129884, title: "Starry Night and the Astronauts", artist: "Alma Thomas", year: "1972", image: "e966799b-97ee-1cc6-bd2f-a94b4b8bb8f9", category: "Painting" },
    { id: 24645, title: "The Great Wave", artist: "Katsushika Hokusai", year: "1830–33", image: "b3974542-b9b4-7568-fc4b-966738f61d78", category: "Print" },
    { id: 111628, title: "Nighthawks", artist: "Edward Hopper", year: "1942", image: "831a05de-d3f6-f4fa-a460-23008dd58dda", category: "Painting" },
] as const;

export const previewVariants = [
    { slug: "editorial", number: "01", title: "Editorial", description: "A quiet exhibition cover with generous space and strong typography." },
    { slug: "archive", number: "02", title: "Archive", description: "A precise index of works, built for browsing and comparison." },
    { slug: "nocturne", number: "03", title: "Nocturne", description: "An immersive feature page that lets one artwork lead." },
] as const;

export type PreviewVariant = (typeof previewVariants)[number]["slug"];

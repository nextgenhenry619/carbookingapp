/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains:['cdn.imagin.studio']
    },
    typescript: {
        ignoreBuildErros: true,
    }
}

module.exports = nextConfig

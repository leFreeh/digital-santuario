# ✦ Santuario Digital

Museo digital personal de objetos, historias y cosas que han acabado formando parte de mi vida.

## 🛠️ Tecnologías

- Astro
- Tailwind CSS
- MDX
- pnpm
- Docker

## 🚀 Instalación

### Método 1 — Local

**Requisitos:**

- Node.js >= 22.12.0
- pnpm >= 9

```bash
git clone https://github.com/leFreeh/digital-santuario
cd Santuario-digital
pnpm install
pnpm run dev
```

Abrir `http://localhost:4321`.

### Método 2 — Docker

**Requisitos:**

- Docker
- Docker Compose

```bash
git clone https://github.com/leFreeh/digital-santuario
cd Santuario-digital
docker compose up --build
```

Abrir `http://localhost:4321`.

Para detener el contenedor:

```bash
docker compose down
```

## 📦 Scripts

```bash
pnpm run dev
pnpm run build
pnpm run preview
```

## 📁 Objetos

Los objetos se encuentran en:

```text
src/content/objects/
```

Cada objeto es un archivo `.mdx`.

Las imágenes se encuentran en:

```text
public/images/
```
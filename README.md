# Santuario Digital

Repositorio del proyecto **Santuario Digital**, una colección digital de objetos y artículos documentados mediante Astro, MDX y Tailwind CSS.

## Stack

- Astro 7
- TypeScript
- Tailwind CSS 4
- MDX
- pnpm
- Node.js >= 22.12.0

## Requisitos

Necesitas tener instalado:

- Node.js `>= 22.12.0`
- pnpm

Puedes comprobar las versiones con:

```bash
node -v
pnpm -v
```

## Instalación

### Método 1 — Instalación local

Clona el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
cd santuario-digital
```

Instala las dependencias:

```bash
pnpm install
```

Inicia el servidor de desarrollo:

```bash
pnpm run dev
```

Después abre la dirección que indique Astro, normalmente:

```text
http://localhost:4321
```

### Método 2 — Entorno aislado con Docker

Si no quieres instalar Node.js y pnpm directamente en tu ordenador, puedes ejecutar el proyecto dentro de un contenedor Docker.

Asegúrate de tener Docker instalado y ejecuta:

```bash
docker run --rm -it -p 4321:4321 -v "${PWD}:/app" -w /app node:22 bash
```

Dentro del contenedor instala pnpm:

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

Instala las dependencias:

```bash
pnpm install
```

Inicia Astro:

```bash
pnpm run dev --host 0.0.0.0
```

El proyecto estará disponible en:

```text
http://localhost:4321
```

## Estructura del proyecto

```text
src/
├── components/
│   ├── Gallery.astro
│   ├── ObjectCard.astro
│   ├── ObjectInfo.astro
│   ├── ObjectNavigation.astro
│   └── Quote.astro
│
├── content/
│   └── objects/
│       ├── *.mdx
│       └── ...
│
├── layouts/
│   └── Layout.astro
│
├── pages/
│   ├── index.astro
│   └── objects/
│       └── [id].astro
│
└── styles/
    └── global.css

public/
└── images/
    └── ...
```

## Crear un nuevo objeto

Los objetos se almacenan como archivos `.mdx` dentro de:

```text
src/content/objects/
```

Ejemplo:

```mdx
---
name: "Nombre del objeto"
date: 2026-08-13
image: "/images/objeto/main.webp"
tags:
  - naturaleza
  - insectos
---

## Descripción

Contenido del objeto.

Aquí podemos utilizar **Markdown** y componentes **MDX**.
```

Las imágenes del objeto pueden organizarse dentro de su propia carpeta:

```text
public/images/
└── objeto/
    ├── main.webp
    ├── detail-01.webp
    └── detail-02.webp
```

## Comandos

Iniciar el servidor de desarrollo:

```bash
pnpm run dev
```

Generar la versión de producción:

```bash
pnpm run build
```

Previsualizar la versión de producción:

```bash
pnpm run preview
```

## Notas

El proyecto utiliza Content Collections de Astro para validar y gestionar los objetos.

Las rutas dinámicas de los objetos utilizan:

```text
/objects/[id]
```

El `id` procede del nombre del archivo `.mdx`.

Por ejemplo:

```text
src/content/objects/aporia-crataegi.mdx
```

genera:

```text
/objects/aporia-crataegi
```

La navegación entre objetos se calcula automáticamente a partir de la fecha definida en cada entrada.
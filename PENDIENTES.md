# Pendientes de la demo `electricidad_3` (Corrent Electricistas, datos ficticios)

Web creada el 16/10/2026 desde el template `kit/templates/electricidad/electricidad-3` «Sin sorpresas» con core `^0.5.0`. Proceso: `kit/docs/nuevo-cliente.md`. Estos pasos los hace Ysst en local (necesitan su token de GitHub Packages o el navegador). Borra cada línea al hacerla y este archivo al terminar.

## 1. Lockfile (paso 3 de `nuevo-cliente.md`)

Desde la carpeta de la web (`mis_datos/electricidad_3/` o el Codespace), comandos de terminal:

```bash
git pull
pnpm install
readlink -f node_modules/@andrei-leads/core    # debe acabar en …@andrei-leads+core@0.5.0_…
pnpm build
git add pnpm-lock.yaml
git commit -m "pnpm-lock"
git push
```

Un `401` en `pnpm install` = token personal caducado o mal pegado en `~/.npmrc` (`kit/docs/publicar-core.md` → «Llave»).

## 2. Datos (en `site.config.ts`, contenido de archivo)

- [ ] `contacto.telefono` y `contacto.whatsapp`: tu móvil (`+34` + 9 dígitos), en lugar de `+34600000000`.
- [ ] Comprobar en Google y Maps que «Corrent Electricistas» no existe en Torrent. Alternativas: «Electricistas Alcover» y «Volt Horta Sud» (si cambia, también `nombre`, `nombreLegal`, el email `.example`, `seo.titulo` y la historia de `empresa`).
- [ ] Revisar las tarifas y precios marcados `PRECIO FICTICIO`: son inventados. Borrarlos o sustituirlos por cifras validadas por el cliente (`precioDesde`, `trabajos[].precio`, `tarifas`).
- [ ] Lectura rápida de los textos de los servicios (los escribió un agente).

## 3. Vercel (pasos 10–12 de `nuevo-cliente.md`, en el navegador)

- [ ] GitHub App de Vercel con acceso al repo `electricidad_3`. Hobby solo despliega repos públicos de la organización: ponerlo **público** (datos ficticios, sin secretos) o usar Pro.
- [ ] Proyecto nuevo en Vercel con la variable `NPM_RC` (Production y Preview, Sensitive).
- [ ] Tras el primer despliegue: `seo.url` con la URL real de Vercel, `pnpm build`, commit y push.
- [ ] Comprobaciones del paso 12 (rutas, `noindex`, un `<h1>`, `tel:` y `wa.me` con tu número) y prueba desde el móvil.
- [ ] Opcional: analítica (paso 13), `analitica: { vercel: true }` + Analytics → Enable en Vercel.

## 4. Fotos

Las de `public/ejemplo/` son relleno gris. Cuando estén las de IA (prompts en `kit/docs/fotos-ejemplo/electricidad-3/prompts-chatgpt.md`), se ponen en el template de `kit` y se copian aquí con los mismos nombres.

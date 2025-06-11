# Build aşaması
FROM node:18-alpine AS build

# Ortam değişkeni ile NODE_ENV'i production olarak ayarlamak
ENV NODE_ENV=production

# Çalışma dizinini ayarla
WORKDIR /app

# package.json ve lock dosyasını kopyala
COPY package*.json ./

# Bağımlılıkları kur
RUN npm install

# Projeyi kopyala ve build et
COPY . .
RUN npm run build

# Prod ortam için nginx
FROM nginx:alpine

# React build çıktısını nginx html klasörüne kopyala
COPY --from=build /app/build /usr/share/nginx/html

# 📌 Önemli: Özel nginx.conf'u container içine kopyala
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Portu dışa aç
EXPOSE 80

# Nginx’i başlat
CMD ["nginx", "-g", "daemon off;"]

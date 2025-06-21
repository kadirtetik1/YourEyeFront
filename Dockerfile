# Build aşaması
FROM node:18-alpine AS build

# Build-time environment variable (docker-compose üzerinden gelir)
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

# Çalışma dizinini ayarla
WORKDIR /app

# package.json ve lock dosyasını kopyala
COPY package*.json ./

# Bağımlılıkları kur
RUN npm install

# Uygulama dosyalarını kopyala
COPY . .

# Build işlemi
RUN npm run build

# Prod ortam için nginx
FROM nginx:alpine

# React build çıktısını nginx html klasörüne kopyala
COPY --from=build /app/build /usr/share/nginx/html

# Özel nginx.conf'u container içine kopyala (varsa)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Portu dışa aç
EXPOSE 80

# Nginx’i başlat
CMD ["nginx", "-g", "daemon off;"]

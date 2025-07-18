# Docker Setup for GAAP Landing Page

This project includes Docker configurations for both development and production environments.

## 🚀 Quick Start

### Production Build

```bash
# Build and run with Docker Compose
docker-compose up --build

# Or build manually
docker build -t gaap-landing-page .
docker run -p 3000:80 gaap-landing-page
```

**Access**: http://localhost:3000

### Development Build (with Hot Reloading)

```bash
# Build and run development environment
docker-compose -f docker-compose.dev.yml up --build

# Or build manually
docker build -f Dockerfile.dev -t gaap-landing-page-dev .
docker run -p 5173:5173 -v $(pwd):/app -v /app/node_modules gaap-landing-page-dev
```

**Access**: http://localhost:5173

## 📁 Docker Files

- **`Dockerfile`**: Multi-stage production build (Node.js → Nginx)
- **`Dockerfile.dev`**: Development environment with hot reloading
- **`docker-compose.yml`**: Production deployment
- **`docker-compose.dev.yml`**: Development with volume mounting
- **`nginx.conf`**: Nginx configuration for SPA routing
- **`.dockerignore`**: Excludes unnecessary files from build context

## 🏗️ Build Process

### Production (`Dockerfile`)
1. **Builder Stage**: Node.js 18 Alpine
   - Installs dependencies
   - Builds the Vite app
2. **Production Stage**: Nginx Alpine
   - Serves static files
   - Includes security headers
   - Enables gzip compression
   - Health checks included

### Development (`Dockerfile.dev`)
- Node.js 18 Alpine with hot reloading
- Volume mounting for live code changes
- Vite dev server on port 5173

## 🔧 Configuration

### Environment Variables
- `NODE_ENV`: Set to `production` or `development`
- `VITE_HMR_HOST`: For development hot module replacement

### Nginx Features
- ✅ SPA routing support (`try_files`)
- ✅ Static asset caching (1 year)
- ✅ Gzip compression
- ✅ Security headers
- ✅ Health checks

## 📊 Container Info

### Production Container
- **Base Image**: nginx:alpine
- **Size**: ~50MB (optimized)
- **Port**: 80 (mapped to 3000)
- **Health Check**: HTTP GET on port 80

### Development Container
- **Base Image**: node:18-alpine
- **Port**: 5173
- **Volume Mounting**: Live code sync
- **Hot Reloading**: Enabled

## 🚀 Deployment Commands

### Local Testing
```bash
# Production build
docker-compose up --build -d

# Check logs
docker-compose logs -f

# Stop
docker-compose down
```

### Development
```bash
# Start dev environment
docker-compose -f docker-compose.dev.yml up --build

# Rebuild after dependency changes
docker-compose -f docker-compose.dev.yml up --build --force-recreate
```

### Docker Commands
```bash
# Build production image
docker build -t gaap-landing-page .

# Run production container
docker run -d -p 3000:80 --name gaap-app gaap-landing-page

# Check container health
docker ps
docker logs gaap-app

# Stop and remove
docker stop gaap-app
docker rm gaap-app
```

## 🔍 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Change port in docker-compose.yml
   ports:
     - "3001:80"  # Use different port
   ```

2. **Build fails**
   ```bash
   # Clean build
   docker-compose down
   docker system prune -f
   docker-compose up --build --force-recreate
   ```

3. **Hot reloading not working**
   ```bash
   # Ensure volume mounting is correct
   # Check VITE_HMR_HOST environment variable
   ```

## 📈 Performance

- **Production image size**: ~50MB
- **Cold start time**: ~2-3 seconds
- **Build time**: ~2-5 minutes (depending on dependencies)
- **Memory usage**: ~10-20MB (Nginx)

## 🔒 Security

- Security headers included
- No unnecessary packages in production
- Alpine Linux base (minimal attack surface)
- Non-root user execution
- Health checks for monitoring

---

**Note**: Make sure Docker and Docker Compose are installed on your system before running these commands. 
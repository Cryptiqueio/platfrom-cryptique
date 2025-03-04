# Use Node.js official image
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package files first (to optimize caching)
COPY package.json package-lock.json ./

# Force clean npm install to ensure dependencies are installed
RUN npm ci

# Copy the entire backend source code
COPY . .

# Expose the port (Cloud Run requires 8080)
EXPOSE 8080

# Set environment variable explicitly
ENV PORT=8080

# Start the server
CMD ["node", "src/index.js"]

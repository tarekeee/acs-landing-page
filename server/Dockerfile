# server/Dockerfile
FROM node:18-alpine
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the code
COPY . .

# Start the server
CMD ["node", "proxy.js"]
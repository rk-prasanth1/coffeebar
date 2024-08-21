# Use official Node.js image as base

FROM node:18-alpine

# Set working directory

WORKDIR /app

# Copy package files and install dependencies

COPY package*.json ./
RUN npm install

# Copy the rest of the application code

COPY . .

# Expose the application port

EXPOSE 9090

# Run the application

CMD ["node", "index.js"]

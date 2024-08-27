# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Build the app for production
RUN npm run build

# Install serve to run the build
RUN npm install -g serve

# Expose port 5000
EXPOSE 5000

# Start the app
CMD ["serve", "-s", "dist"]

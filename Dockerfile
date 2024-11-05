# Use an official Node.js image from the Docker Hub as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port your application runs on
EXPOSE 5173

# Define the command to run your application
CMD ["npm","run", "dev"]
# Use the official Node.js image from the Docker Hub
FROM node:14

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# The asterisk is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# Install production dependencies
RUN npm install --legacy-peer-deps

# Copy local code to the container image
COPY . .

# Run the web service on container startup
CMD ["npm", "run", "dev", "--", "-p", "8006"]

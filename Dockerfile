FROM node:22-alpine

# Setting working directory
WORKDIR /app 

# Copy all local files into working directory
COPY . .

# Install pnpm
RUN npm i -g pnpm

# Perform  install
RUN pnpm install

# Build App
RUN pnpm build

# Remove dev dependencies
RUN pnpm prune --production

# Expose port 3000 by default sveltekit running on port 3000
EXPOSE 3000

# RUN using node
CMD [ "node", "build" ]

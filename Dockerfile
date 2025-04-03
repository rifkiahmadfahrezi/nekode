# Use Bun official image
FROM oven/bun:1 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and bun.lockb first to leverage caching
COPY package.json bun.lockb source.config.ts ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy the rest of the application code
COPY . ./

# Build the Next.js app
RUN bun run build

# Start a new lightweight container for production
FROM oven/bun:1 AS runner

# Set the working directory
WORKDIR /app

# Copy necessary files from the builder stage
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Expose the Next.js port
EXPOSE 3000

# Start the application
CMD ["bun", "run", "start"]

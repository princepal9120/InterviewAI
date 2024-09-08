/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:sX4xBmkR2vOz@ep-aged-fog-a1xp74nm.ap-southeast-1.aws.neon.tech/interviewAi?sslmode=require ',
    }
  };